Array.prototype.every = function every(callback) {
	if (this === undefined || this === null) {
		throw new TypeError(this + 'is not an object');
	}

	var
	object = Object(this),
	scope = arguments[1],
	arraylike = typeof object === 'string' ? object.split('') : object,
	// Loose implementation of ES6's ToLength
	length = Math.min(arraylike.length, 9007199254740991) | 0,
	index = -1;

	// Test the type of the callback after doing ToObject and
	// Get(arraylike, 'length') so that errors during those operations are
	// thrown before this TypeError
	if (!(callback instanceof Function)) {
		throw new TypeError(callback + ' is not a function');
	}

	while (++index < length) {
		if (index in arraylike && !callback.call(scope, arraylike[index], index, object)) {
			return false;
		}
	}

	return true;
};
