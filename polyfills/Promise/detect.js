// Some of these methods are missing from
// Firefox/Chrome experimental implementations
"Promise" in window &&
    "resolve" in Promise &&
    "reject" in Promise &&
    "race" in Promise &&
    "all" in Promise &&
    (function () {
        var p = Promise.resolve(),
            resolve;

        new Promise(function (r) {
            resolve = r;
        });

        // An older version of the spec had a resolver object
        // as the arg rather than a function
        // Also, another version of the spec had a Promise.cast() method and
        // Promise.resolve always returned a new Promise object
        return typeof resolve === 'function' && p === Promise.resolve(p);
    }())
