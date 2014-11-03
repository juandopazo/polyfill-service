var fs     = require('fs');
var assert = require('assert');

eval(
    '(function () {\n' +
    fs.readFileSync('./polyfills/Promise/polyfill.js', 'utf8') +
    '}).call(global);'
);

describe('global.Promise', function () {
    it('is correctly defined', function () {
        assert.equal(typeof global.Promise, 'function');
        assert.equal(typeof Promise.resolve, 'function');
        assert.equal(typeof Promise.reject, 'function');
        assert.equal(typeof Promise.all, 'function');
        assert.equal(typeof Promise.race, 'function');
    });
});

describe('Promises A+ Tests', function () {
    var adapter = {
        resolved: function (value) {
            return Promise.resolve(value);
        },
        rejected: function (reason) {
            return Promise.reject(reason);
        },
        deferred: function () {
            var deferred = {};

            deferred.promise = new Promise(function (resolve, reject) {
                deferred.resolve = resolve;
                deferred.reject = reject;
            });

            return deferred;
        }
    };

    require('promises-aplus-tests').mocha(adapter);
});
