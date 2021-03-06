'use strict';

require('es6-promise').polyfill();

module.exports = function(grunt) {

	grunt.initConfig({
		"clean": {
			repo: ['polyfills/__repo'],
			versions: ['polyfills/__versions']
		},
		"simplemocha": {
			options: {
				globals: ['should'],
				timeout: 5000,
				ignoreLeaks: false,
				ui: 'bdd',
				reporter: 'spec'
			},
			all: {
				src: ['test/node/**/*.js']
			}
		},
		"saucelabs": {
			compat: {
				options: {
					urls: {
						polyfilled: 'http://127.0.0.1:3000/test/director?mode=all',
						native: 'http://127.0.0.1:3000/test/director?mode=control'
					},
					browsers: browsers.full
				}
			},
			ci: {
				options: {
					cibuild: true,
					urls: {
						default: 'http://127.0.0.1:3000/test/director?mode=targeted'
					},
					browsers: browsers.ci
				}
			},
			quick: {
				options: {
					cibuild: true,
					urls: {
						default: 'http://127.0.0.1:3000/test/director?mode=targeted'
					},
					browsers: browsers.quick
				}
			}
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-simple-mocha');

	grunt.registerTask("test", [
		"simplemocha",
		"buildsources",
		"polyfillservice",
		"saucelabs:quick",
	]);

	grunt.registerTask("compatgen", [
		"simplemocha",
		"polyfillservice",
		"buildsources",
		"saucelabs:compat",
		"compattable"
	]);

	grunt.registerTask("ci", [
		"simplemocha",
		"polyfillservice",
		"saucelabs:ci"
	]);

	grunt.registerTask("build", [
		"clean:repo",
		"clean:versions",
		"installcollections",
		"buildsources",
		"clean:repo"
	]);
};

var browsers = {
	quick: [
		['chrome', '39', 'Windows 7'],
		['firefox', '34', 'Linux'],
		['internet explorer', '7', 'Windows XP'],
		['internet explorer', '11', 'Windows 8.1'],
	],
	ci: [
		['chrome', '39', 'Windows 7'],
		['chrome', '26', 'Windows 7'],
		['firefox', '34', 'Linux'],
		['firefox', '20', 'Linux'],
		['firefox', '3.6', 'Linux'],
		['internet explorer', '6', 'Windows XP'],
		['internet explorer', '7', 'Windows XP'],
		['internet explorer', '8', 'Windows XP'],
		['internet explorer', '9', 'Windows 7'],
		['internet explorer', '10', 'Windows 7'],
		['internet explorer', '11', 'Windows 8.1'],
		['safari', '5', 'OSX 10.6'],
		['safari', '7', 'OSX 10.9'],
		['android', '4.4', 'linux'],
		['android', '4.0', 'linux']
	],
	full: [
		['chrome', '39', 'Windows 7'],
		['chrome', '38', 'Windows 7'],
		['chrome', '34', 'Windows 7'],
		['chrome', '26', 'Windows 7'],
		['firefox', '34', 'Linux'],
		['firefox', '33', 'Linux'],
		['firefox', '29', 'Linux'],
		['firefox', '20', 'Linux'],
		['firefox', '3.6', 'Linux'],
		['internet explorer', '6', 'Windows XP'],
		['internet explorer', '7', 'Windows XP'],
		['internet explorer', '8', 'Windows XP'],
		['internet explorer', '9', 'Windows 7'],
		['internet explorer', '10', 'Windows 7'],
		['internet explorer', '11', 'Windows 8.1'],
		['safari', '5', 'OSX 10.6'],
		['safari', '6', 'OSX 10.8'],
		['safari', '7', 'OSX 10.9'],
		['android', '4.4', 'linux'],
		['android', '4.3', 'linux'],
		['android', '4.2', 'linux'],
		['android', '4.1', 'linux'],
		['android', '4.0', 'linux'],
		['iphone', '7.1', 'OSX 10.9']
	]
};
