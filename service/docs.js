var Router = require('express').Router,
	request = require('request-promise'),
	ua = require('../lib/UA'),
	sources = require('../lib/sources');

var cache = {},
	cachettl = 1800;

var handlers = {
	fastly: function() {
		return request({
			url: 'https://api.fastly.com/stats/service/' + process.env.FASTLY_SERVICE_ID + '?from=7 days ago&to=2 hours ago&by=hour',
			headers: { 'fastly-key': process.env.FASTLY_API_KEY },
		}).then(function (response) {
			var byhour = [], rollup = {requests:0, hits:0, miss:0, bandwidth:0};
			var data = (response && JSON.parse(response)) || {data:[]};
			byhour = data.data.map(function(result) {
				rollup.requests += result.requests;
				rollup.hits += result.hits;
				rollup.miss += result.miss;
				rollup.bandwidth += result.bandwidth;
				return {date: result.start_time, requests:result.requests, hits:result.hits, miss:result.miss};
			});
			return {byhour:byhour, rollup:rollup};
		});
	},
	respTimes: function() {
		var to = ((new Date()).getTime()/1000) - 3600;
		var from = to - (60*60*24*7);
		return request({
			url: 'https://api.pingdom.com/api/2.0/summary.performance/' + process.env.PINGDOM_CHECK_ID + '?from='+from+'&to='+to+'&resolution=hour',
			headers: {
				'app-key': process.env.PINGDOM_API_KEY,
				'Account-Email': process.env.PINGDOM_ACCOUNT
			},
			auth: {
				user: process.env.PINGDOM_USERNAME,
				pass: process.env.PINGDOM_PASSWORD
			}
		}).then(function (response) {
			var data = (response && JSON.parse(response)) || [];
			if (!data.summary) {
				data = {summary:{hours:[]}};
			}
			return data.summary.hours.map(function(result) {
				return {date: result.starttime, respTime: result.avgresponse};
			});
		});
	},
	outages: function() {
		var to = ((new Date()).getTime()/1000) - 3600;
		var from = to - (60*60*24*365*5);
		return request({
			url: 'https://api.pingdom.com/api/2.0/summary.outage/' + process.env.PINGDOM_CHECK_ID + '?from='+from+'&to='+to+'&order=desc',
			headers: {
				'app-key': process.env.PINGDOM_API_KEY,
				'Account-Email': process.env.PINGDOM_ACCOUNT
			},
			auth: {
				user: process.env.PINGDOM_USERNAME,
				pass: process.env.PINGDOM_PASSWORD
			}
		}).then(function (response) {
			var data = (response && JSON.parse(response)) || {summary:{states:[]}};
			return data.summary.states
				.filter(function(result) {
					return (result.status !== 'unknown');
				})
				.map(function(result) {
					return {
						date: result.timefrom,
						status: result.status.toUpperCase(),
						duration: result.timeto - result.timefrom
					};
				})
				.slice(0,5);
		});
	},
	sizes: function() {
		var sizes = [];
		var zlib = require('zlib');
		var PolyfillSet = require('./PolyfillSet');
		var polyfillservice = require('../lib');
		var data = require('../docs/assets/compat.json');
		var firstfeature = data[Object.keys(data)[0]];
		Object.keys(firstfeature).forEach(function(family) {
			Object.keys(firstfeature[family]).forEach(function(version) {
				var minsrc = polyfillservice.getPolyfillString({
					features: PolyfillSet.fromQueryParam('default').get(),
					uaString:family+'/'+version,
					minify: true
				});
				sizes.push({
					family: family,
					ver: version,
					minsrc: minsrc,
					rawbytes: polyfillservice.getPolyfillString({
						features: PolyfillSet.fromQueryParam('default').get(),
						uaString:family+'/'+version,
						minify: false
					}).length,
					minbytes: minsrc.length
				});
			});
		});
		return Promise.all(sizes.map(function(item) {
			return new Promise(function(resolve, reject) {
				zlib.gzip(item.minsrc, function(err, gzipsrc) {
					if (!err) {
						item.gzipbytes = gzipsrc.length;
					}
					resolve(item);
				});
			});
		}));
	}
};

function getData(type) {
	if (!(cache.hasOwnProperty(type) && cache[type].creationTime > ((new Date()).getTime() - (cachettl*1000)))) {
		cache[type] = {creationTime: (new Date()).getTime()};
		cache[type].promise = handlers[type]();
	}
	return cache[type].promise;
}

function getCompat() {
	var data = require('../docs/assets/compat.json');
	var sourceslib = sources.latest;
	var browsers = ['ie', 'firefox', 'chrome', 'safari', 'opera', 'ios_saf'];
	var msgs = {
		'native': 'Supported natively',
		'polyfilled': 'Supported with polyfill service',
		'missing': 'Not supported'
	};
	return Object.keys(data)
		.filter(function(feature) {
			return sourceslib.polyfillExists(feature);
		})
		.sort()
		.map(function(feat) {
			var polyfill = sourceslib.getPolyfill(feat);
			var fdata = {
				feature: feat,
				size: Object.keys(polyfill.variants).reduce(function(size, variantName) {
					return Math.max(size, polyfill.variants[variantName].minGatedSource.length);
				}, 0),
				isDefault: (polyfill.aliases && polyfill.aliases.indexOf('default') !== -1),
				hasTests: polyfill.hasTests
			};
			browsers.forEach(function(browser) {
				if (data[feat][browser]) {
					fdata[browser] = [];
					Object.keys(data[feat][browser]).sort(function(a, b) {
						if (isNaN(a)) {
							return 1;
						}
						if (isNaN(b)) {
							return -1;
						}
						return (parseFloat(a) < parseFloat(b)) ? -1 : 1;
					}).forEach(function(version) {
						fdata[browser].push({
							status: data[feat][browser][version],
							statusMsg: msgs[data[feat][browser][version]],
							version: version
						});
					});
				}
			});
			return fdata;
		});
}

// Quick helper for Promise.all to spread results over separate arguments rather than an array
function spread(fn) {
	return function(results) {
		fn.apply(fn, results);
	};
}

var docs = new Router();

docs.route('/').get(function (req, res) {
	res.render('index', {
		section: 'index'
	});
});

docs.route('/usage').get(function (req, res, next) {
	Promise.all([getData('fastly'), getData('outages'), getData('respTimes')])
		.then(spread(function(fastly, outages, respTimes) {
			// Set the ttl to one hour for the usage page so the graphs are
			// updated more frequently, overriding the default cache-control
			// behaviour set in index.js
			var one_hour = 60 * 60;
			var one_week = one_hour * 24 * 7;
			res.set('Cache-Control', 'public, max-age=' + one_hour +', stale-while-revalidate=' + one_week + ', stale-if-error=' + one_week);
			res.render('usage', {
				section: 'usage',
				requestsData: fastly.byhour,
				outages: outages,
				respTimes: respTimes,
				hitCount: fastly.rollup.hits,
				missCount: fastly.rollup.miss
			});
		}))
		.catch(function (err) {
			setImmediate(function () {
				next(err);
			});
		});
});

docs.route('/features').get(function (req, res, next) {
	getData('sizes')
		.then(function(sizes) {
			res.render('compat', {
				section: 'features',
				compat: getCompat(),
				sizes: sizes
			});
		})
		.catch(function (err) {
			setImmediate(function () {
				next(err);
			});
		});
});

docs.route('/api').get(function (req, res) {
	var versions = sources.listVersions();
	res.render('api', {
		section: 'api',
		hasVersions: versions.length > 1,
		versions: versions
	});
});

docs.route('/examples').get(function (req, res) {
	res.render('examples', {
		section: 'examples'
	});
});

docs.route('/contributing').get(function (req, res) {
	res.render('contributing', {
		section: 'contributing',
		baselines: ua.getBaselines()
	});
});

module.exports = docs;
