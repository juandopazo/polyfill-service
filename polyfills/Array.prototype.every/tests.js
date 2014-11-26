it('has correct instance', function () {
	expect(Array.prototype.every).to.be.a(Function);
});

it('has correct name', function () {
	expect(nameOf(Array.prototype.every)).to.be('every');
});

it('has correct argument length', function () {
	expect(Array.prototype.every.length).to.be(1);
});

describe('callback', function () {
	it('has correct argument length', function () {
		[10, 11, 12].every(function () {
			expect(arguments.length).to.be(3);
		});
	});
});

describe('applies callback correctly with', function () {
	function elementIsGreaterThan9(element) {
		return element > 9;
	}

	function elementIsGreaterThan10(element) {
		return element > 10;
	}

	it('arrays', function () {
		expect([10, 11, 12].every(elementIsGreaterThan9)).to.be(true);
		expect([10, 11, 12].every(elementIsGreaterThan10)).to.be(false);
	});

	it('array-like objects', function () {
		var
		// 3: 0 is ignored because length omits it
		object = { 0: 10, 1: 11, 2: 12, 3: 0, length: 3 };

		expect(Array.prototype.every.call(object, elementIsGreaterThan9)).to.be(true);
		expect(Array.prototype.every.call(object, elementIsGreaterThan10)).to.be(false);
	});
});

describe('Test 262: 15.4.4.16', function () {
    function runTestCase(fn) {
        expect(fn()).to.be.ok();
    }

    var fnGlobalObject = (function () {
        var __globalObject = Function("return this;")();
        return function fnGlobalObject() {
             return __globalObject;
        };
    }());


	specify('15.4.4.16-0-1', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-0-1
		description: Array.prototype.every must exist as a function
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		  var f = Array.prototype.every;
		  if (typeof(f) === "function") {
		    return true;
		  }
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-0-2', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-0-2
		description: Array.prototype.every.length must be 1
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		  if (Array.prototype.every.length === 1) {
		    return true;
		  }
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-1-1', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-1-1
		description: Array.prototype.every applied to undefined throws a TypeError
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        try {
		            Array.prototype.every.call(undefined); // TypeError is thrown if value is undefined
		            return false;
		        } catch (e) {
		            return (e instanceof TypeError);
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-1-10', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-1-10
		description: Array.prototype.every applied to the Math object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn(val, idx, obj) {
		            return ('[object Math]' !== Object.prototype.toString.call(obj));
		        }
		
		        try {
		            Math.length = 1;
		            Math[0] = 1;
		            return !Array.prototype.every.call(Math, callbackfn);
		        } finally {
		            delete Math[0];
		            delete Math.length;
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-1-11', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-1-11
		description: Array.prototype.every applied to Date object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn(val, idx, obj) {
		            return !(obj instanceof Date);
		        }
		
		        var obj = new Date();
		        obj.length = 1;
		        obj[0] = 1;
		
		        return !Array.prototype.every.call(obj, callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-1-12', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-1-12
		description: Array.prototype.every applied to RegExp object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn(val, idx, obj) {
		            return !(obj instanceof RegExp);
		        }
		
		        var obj = new RegExp();
		        obj.length = 1;
		        obj[0] = 1;
		
		        return !Array.prototype.every.call(obj, callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-1-13', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-1-13
		description: Array.prototype.every applied to the JSON object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn(val, idx, obj) {
		            return ('[object JSON]' !== Object.prototype.toString.call(obj));
		        }
		
		        try {
		            JSON.length = 1;
		            JSON[0] = 1;
		            return !Array.prototype.every.call(JSON, callbackfn);
		        } finally {
		            delete JSON.length;
		            delete JSON[0];
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-1-14', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-1-14
		description: Array.prototype.every applied to Error object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn(val, idx, obj) {
		            return !(obj instanceof Error);
		        }
		
		        var obj = new Error();
		        obj.length = 1;
		        obj[0] = 1;
		
		        return !Array.prototype.every.call(obj, callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-1-15', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-1-15
		description: Array.prototype.every applied to the Arguments object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn(val, idx, obj) {
		            return ('[object Arguments]' !== Object.prototype.toString.call(obj));
		        }
		
		        var obj = (function fun() {
		            return arguments;
		        }("a", "b"));
		
		        return !Array.prototype.every.call(obj, callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-1-2', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-1-2
		description: Array.prototype.every applied to null throws a TypeError
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        try {
		            Array.prototype.every.call(null); // TypeError is thrown if value is null
		            return false;
		        } catch (e) {
		            return (e instanceof TypeError);
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-1-3', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-1-3
		description: Array.prototype.every applied to boolean primitive
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return obj instanceof Boolean;
		        }
		
		        try {
		            Boolean.prototype[0] = 1;
		            Boolean.prototype.length = 1;
		            return Array.prototype.every.call(false, callbackfn) && accessed;
		        } finally {
		            delete Boolean.prototype[0];
		            delete Boolean.prototype.length;
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-1-4', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-1-4
		description: Array.prototype.every applied to Boolean object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        var accessed = false;
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return obj instanceof Boolean;
		        }
		
		        var obj = new Boolean(true);
		        obj.length = 2;
		        obj[0] = 11;
		        obj[1] = 12;
		        return Array.prototype.every.call(obj, callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-1-5', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-1-5
		description: Array.prototype.every applied to number primitive
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        var accessed = false;
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return obj instanceof Number;
		        }
		
		        try {
		            Number.prototype[0] = 1;
		            Number.prototype.length = 1;
		            return Array.prototype.every.call(2.5, callbackfn) && accessed;
		        } finally {
		            delete Number.prototype[0];
		            delete Number.prototype.length;
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-1-6', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-1-6
		description: Array.prototype.every applied to Number object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        var accessed = false;
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return obj instanceof Number;
		        }
		
		        var obj = new Number(-128);
		        obj.length = 2;
		        obj[0] = 11;
		        obj[1] = 12;
		        return Array.prototype.every.call(obj, callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-1-7', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-1-7
		description: Array.prototype.every applied to string primitive
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn(val, idx, obj) {
		            return !(obj instanceof String);
		        }
		
		        return !Array.prototype.every.call("hello\nworld\\!", callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-1-8', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-1-8
		description: Array.prototype.every applied to String object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn(val, idx, obj) {
		            return !(obj instanceof String);
		        }
		
		        var obj = new String("hello\nworld\\!");
		
		        return !Array.prototype.every.call(obj, callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-1-9', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-1-9
		description: Array.prototype.every applied to Function object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn(val, idx, obj) {
		            return !(obj instanceof Function);
		        }
		
		        var obj = function (a, b) {
		            return a + b;
		        };
		        obj[0] = 11;
		        obj[1] = 9;
		
		        return !Array.prototype.every.call(obj, callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-2-1', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-2-1
		description: >
		    Array.prototype.every applied to Array-like object, 'length' is an
		    own data property
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var obj = {
		            0: 12,
		            1: 11,
		            2: 9,
		            length: 2
		        };
		
		        return Array.prototype.every.call(obj, callbackfn1) &&
		            !Array.prototype.every.call(obj, callbackfn2);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-2-10', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-2-10
		description: >
		    Array.prototype.every applied to Array-like object, 'length' is an
		    inherited accessor property
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var proto = { };
		
		        Object.defineProperty(proto, "length", {
		            get: function () {
		                return 2;
		            },
		            configurable: true
		        });
		
		        var Con = function () { };
		        Con.prototype = proto;
		
		        var child = new Con();
		        child[0] = 12;
		        child[1] = 11;
		        child[2] = 9;
		
		        return Array.prototype.every.call(child, callbackfn1) &&
		            !Array.prototype.every.call(child, callbackfn2);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-2-11', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-2-11
		description: >
		    Array.prototype.every applied to Array-like object, 'length' is an
		    own accessor property without a get function
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return val > 10;
		        }
		
		        var obj = {
		            0: 9,
		            1: 8
		        };
		        Object.defineProperty(obj, "length", {
		            set: function () { },
		            configurable: true
		        });
		
		        return Array.prototype.every.call(obj, callbackfn) && !accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-2-12', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-2-12
		description: >
		    Array.prototype.every - 'length' is own accessor property without
		    a get function that overrides an inherited accessor property
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return val > 10;
		        }
		
		        try {
		            Object.defineProperty(Object.prototype, "length", {
		                get: function () {
		                    return 2;
		                },
		                configurable: true
		            });
		
		            var obj = { 0: 9, 1: 8 };
		            Object.defineProperty(obj, "length", {
		                set: function () { },
		                configurable: true
		            });
		
		            return Array.prototype.every.call(obj, callbackfn) && !accessed;
		        } finally {
		            delete Object.prototype.length;
		        }
		
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-2-13', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-2-13
		description: >
		    Array.prototype.every applied to the Array-like object that
		    'length' is inherited accessor property without a get function
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return val > 10;
		        }
		
		        var proto = {};
		        Object.defineProperty(proto, "length", {
		            set: function () { },
		            configurable: true
		        });
		
		        var Con = function () { };
		        Con.prototype = proto;
		
		        var child = new Con();
		        child[0] = 9;
		        child[1] = 8;
		
		        return Array.prototype.every.call(child, callbackfn) && !accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-2-14', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-2-14
		description: >
		    Array.prototype.every applied to the Array-like object that
		    'length' property doesn't exist
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return val > 10;
		        }
		
		        var obj = { 0: 11, 1: 12 };
		
		        return Array.prototype.every.call(obj, callbackfn) && !accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-2-15', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-2-15
		description: Array.prototype.every - 'length' is property of the global object
		includes:
		    - runTestCase.js
		    - fnGlobalObject.js
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        try {
		            var oldLen = fnGlobalObject().length;
		            fnGlobalObject()[0] = 12;
		            fnGlobalObject()[1] = 11;
		            fnGlobalObject()[2] = 9;
		            fnGlobalObject().length = 2;
		            return Array.prototype.every.call(fnGlobalObject(), callbackfn1) &&
		                !Array.prototype.every.call(fnGlobalObject(), callbackfn2);
		        } finally {
		            delete fnGlobalObject()[0];
		            delete fnGlobalObject()[1];
		            delete fnGlobalObject()[2];
		            fnGlobalObject().length = oldLen;
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-2-17', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-2-17
		description: >
		    Array.prototype.every applied to the Arguments object, which
		    implements its own property get method
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var func = function (a, b) {
		            arguments[2] = 9;
		            return Array.prototype.every.call(arguments, callbackfn1) &&
		                !Array.prototype.every.call(arguments, callbackfn2);
		        };
		
		        return func(12, 11);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-2-18', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-2-18
		description: >
		    Array.prototype.every applied to String object, which implements
		    its own property get method
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return parseInt(val, 10) > 1;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return parseInt(val, 10) > 2;
		        }
		
		        var str = new String("432");
		        try {
		            String.prototype[3] = "1";
		            return Array.prototype.every.call(str, callbackfn1) &&
		            !Array.prototype.every.call(str, callbackfn2);
		        } finally {
		            delete String.prototype[3];
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-2-19', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-2-19
		description: >
		    Array.prototype.every applied to Function object, which implements
		    its own property get method
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var fun = function (a, b) {
		            return a + b;
		        };
		        fun[0] = 12;
		        fun[1] = 11;
		        fun[2] = 9;
		
		        return Array.prototype.every.call(fun, callbackfn1) &&
		            !Array.prototype.every.call(fun, callbackfn2);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-2-2', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-2-2
		description: Array.prototype.every - 'length' is own data property on an Array
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        try {
		            Array.prototype[2] = 9;
		
		            return [12, 11].every(callbackfn1) &&
		                ![12, 11].every(callbackfn2);
		        } finally {
		            delete Array.prototype[2];
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-2-3', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-2-3
		description: >
		    Array.prototype.every applied to Array-like object, 'length' is an
		    own data property that overrides an inherited data property
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var proto = { length: 3 };
		
		        var Con = function () { };
		        Con.prototype = proto;
		
		        var child = new Con();
		        child.length = 2;
		        child[0] = 12;
		        child[1] = 11;
		        child[2] = 9;
		
		        return Array.prototype.every.call(child, callbackfn1) &&
		            !Array.prototype.every.call(child, callbackfn2);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-2-4', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-2-4
		description: >
		    Array.prototype.every - 'length' is own data property that
		    overrides an inherited data property on an Array
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        var arrProtoLen = 0;
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        try {
		            arrProtoLen = Array.prototype.length;
		            Array.prototype.length = 0;
		            Array.prototype[2] = 9;
		
		            return [12, 11].every(callbackfn1) &&
		                ![12, 11].every(callbackfn2);
		        } finally {
		            Array.prototype.length = arrProtoLen;
		            delete Array.prototype[2];
		        }
		
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-2-5', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-2-5
		description: >
		    Array.prototype.every applied to Array-like object, 'length' is an
		    own data property that overrides an inherited accessor property
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var proto = { };
		
		        Object.defineProperty(proto, "length", {
		            get: function () {
		                return 3;
		            },
		            configurable: true
		        });
		
		        var Con = function () { };
		        Con.prototype = proto;
		
		        var child = new Con();
		        child[0] = 12;
		        child[1] = 11;
		        child[2] = 9;
		
		        Object.defineProperty(child, "length", {
		            value: 2,
		            configurable: true
		        });
		
		        return Array.prototype.every.call(child, callbackfn1) &&
		            !Array.prototype.every.call(child, callbackfn2);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-2-6', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-2-6
		description: >
		    Array.prototype.every applied to Array-like object, 'length' is an
		    inherited data property
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var proto = { length: 2 };
		
		        var Con = function () { };
		        Con.prototype = proto;
		
		        var child = new Con();
		        child[0] = 12;
		        child[1] = 11;
		        child[2] = 9;
		
		        return Array.prototype.every.call(child, callbackfn1) &&
		            !Array.prototype.every.call(child, callbackfn2);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-2-7', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-2-7
		description: >
		    Array.prototype.every applied to Array-like object, 'length' is an
		    own accessor property
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var obj = { };
		
		        Object.defineProperty(obj, "length", {
		            get: function () {
		                return 2;
		            },
		            configurable: true
		        });
		
		        obj[0] = 12;
		        obj[1] = 11;
		        obj[2] = 9;
		
		        return Array.prototype.every.call(obj, callbackfn1) &&
		            !Array.prototype.every.call(obj, callbackfn2);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-2-8', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-2-8
		description: >
		    Array.prototype.every applied to Array-like object, 'length' is an
		    own accessor property that overrides an inherited data property
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var proto = { length: 3 };
		
		        var Con = function () { };
		        Con.prototype = proto;
		
		        var child = new Con();
		
		        Object.defineProperty(child, "length", {
		            get: function () {
		                return 2;
		            },
		            configurable: true
		        });
		
		        child[0] = 12;
		        child[1] = 11;
		        child[2] = 9;
		
		        return Array.prototype.every.call(child, callbackfn1) &&
		            !Array.prototype.every.call(child, callbackfn2);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-2-9', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-2-9
		description: >
		    Array.prototype.every applied to Array-like object, 'length' is an
		    own accessor property that overrides an inherited accessor property
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var proto = {};
		
		        Object.defineProperty(proto, "length", {
		            get: function () {
		                return 3;
		            },
		            configurable: true
		        });
		
		        var Con = function () { };
		        Con.prototype = proto;
		
		        var child = new Con();
		
		        Object.defineProperty(child, "length", {
		            get: function () {
		                return 2;
		            },
		            configurable: true
		        });
		
		        child[0] = 12;
		        child[1] = 11;
		        child[2] = 9;
		
		        return Array.prototype.every.call(child, callbackfn1) &&
		            !Array.prototype.every.call(child, callbackfn2);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-1', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-1
		description: Array.prototype.every - value of 'length' is undefined
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return val > 10;
		        }
		
		        var obj = { 0: 9, length: undefined };
		
		        return Array.prototype.every.call(obj, callbackfn) && !accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-10', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-10
		description: >
		    Array.prototype.every - value of 'length' is a number (value is
		    NaN)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return val > 10;
		        }
		
		        var obj = { 0: 9, length: NaN };
		
		        return Array.prototype.every.call(obj, callbackfn) && !accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-11', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-11
		description: >
		    Array.prototype.every - 'length' is a string containing a positive
		    number
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var obj = { 0: 12, 1: 11, 2: 9, length: "2" };
		
		        return Array.prototype.every.call(obj, callbackfn1) &&
		            !Array.prototype.every.call(obj, callbackfn2);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-12', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-12
		description: >
		    Array.prototype.every - 'length' is a string containing a negative
		    number
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var obj = { 0: 11, 1: 12, 2: 9, length: "-4294967294" };
		
		        return Array.prototype.every.call(obj, callbackfn1) &&
		            Array.prototype.every.call(obj, callbackfn2);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-13', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-13
		description: >
		    Array.prototype.every - 'length' is a string containing a decimal
		    number
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var obj = { 0: 12, 1: 11, 2: 9, length: "2.5" };
		
		        return Array.prototype.every.call(obj, callbackfn1) &&
		            !Array.prototype.every.call(obj, callbackfn2);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-14', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-14
		description: Array.prototype.every - 'length' is a string containing +/-Infinity
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return val > 10;
		        }
		
		        var objOne = { 0: 9, length: "Infinity" };
		        var objTwo = { 0: 9, length: "+Infinity" };
		        var objThree = { 0: 9, length: "-Infinity" };
		
		        return !Array.prototype.every.call(objOne, callbackfn) &&
		            !Array.prototype.every.call(objTwo, callbackfn) &&
		            Array.prototype.every.call(objThree, callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-15', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-15
		description: >
		    Array.prototype.every - 'length' is a string containing an
		    exponential number
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var obj = { 0: 12, 1: 11, 2: 9, length: "2E0" };
		
		        return Array.prototype.every.call(obj, callbackfn1) &&
		            !Array.prototype.every.call(obj, callbackfn2);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-16', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-16
		description: >
		    Array.prototype.every - 'length' is a string containing a hex
		    number
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var obj = { 0: 12, 1: 11, 2: 9, length: "0x0002" };
		
		        return Array.prototype.every.call(obj, callbackfn1) &&
		            !Array.prototype.every.call(obj, callbackfn2);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-17', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-17
		description: >
		    Array.prototype.every - 'length' is a string containing a number
		    with leading zeros
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var obj = { 0: 12, 1: 11, 2: 9, length: "0002.00" };
		
		        return Array.prototype.every.call(obj, callbackfn1) &&
		            !Array.prototype.every.call(obj, callbackfn2);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-18', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-18
		description: >
		    Array.prototype.every - value of 'length' is a string that can't
		    convert to a number
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return val > 10;
		        }
		
		        var obj = { 0: 9, 1: 8, length: "two" };
		
		        return Array.prototype.every.call(obj, callbackfn) && !accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-19', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-19
		description: >
		    Array.prototype.every - value of 'length' is an Object which has
		    an own toString method
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var toStringAccessed = false;
		        var obj = {
		            0: 12,
		            1: 11,
		            2: 9,
		
		            length: {
		                toString: function () {
		                    toStringAccessed = true;
		                    return '2';
		                }
		            }
		        };
		
		        // objects inherit the default valueOf() method from Object
		        // that simply returns itself. Since the default valueOf() method
		        // does not return a primitive value, ES next tries to convert the object
		        // to a number by calling its toString() method and converting the
		        // resulting string to a number.
		        return Array.prototype.every.call(obj, callbackfn1) &&
		            !Array.prototype.every.call(obj, callbackfn2) && toStringAccessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-2', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-2
		description: >
		    Array.prototype.every on an Array-like object if 'length' is 1
		    (length overridden to true(type conversion))
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var obj = { 0: 11, 1: 9, length: true };
		
		        return Array.prototype.every.call(obj, callbackfn1) &&
		            !Array.prototype.every.call(obj, callbackfn2);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-20', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-20
		description: >
		    Array.prototype.every - value of 'length' is an Object which has
		    an own valueOf method
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var valueOfAccessed = false;
		
		        var obj = {
		            0: 12,
		            1: 11,
		            2: 9,
		            length: {
		                valueOf: function () {
		                    valueOfAccessed = true;
		                    return 2;
		                }
		            }
		        };
		
		        return Array.prototype.every.call(obj, callbackfn1) &&
		            !Array.prototype.every.call(obj, callbackfn2) && valueOfAccessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-21', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-21
		description: >
		    Array.prototype.every - 'length' is an object that has an own
		    valueOf method that returns an object and toString method that
		    returns a string
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var toStringAccessed = false;
		        var valueOfAccessed = false;
		
		        var obj = {
		            0: 12,
		            1: 11,
		            2: 9,
		            length: {
		                valueOf: function () {
		                    valueOfAccessed = true;
		                    return {};
		                },
		                toString: function () {
		                    toStringAccessed = true;
		                    return '2';
		                }
		            }
		        };
		
		        return Array.prototype.every.call(obj, callbackfn1) &&
		            !Array.prototype.every.call(obj, callbackfn2) &&
		            valueOfAccessed && 
		            toStringAccessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-22', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-22
		description: >
		    Array.prototype.every throws TypeError exception when 'length' is
		    an object with toString and valueOf methods that don�t return
		    primitive values
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var callbackfnAccessed = false;
		        var toStringAccessed = false;
		        var valueOfAccessed = false;
		
		        function callbackfn(val, idx, obj) {
		            callbackfnAccessed = true;
		            return val > 10;
		        }
		
		        var obj = {
		            0: 11,
		            1: 12,
		
		            length: {
		                valueOf: function () {
		                    valueOfAccessed = true;
		                    return {};
		                },
		                toString: function () {
		                    toStringAccessed = true;
		                    return {};
		                }
		            }
		        };
		
		        try {
		            Array.prototype.every.call(obj, callbackfn);
		            return false;
		        } catch (ex) {
		            return (ex instanceof TypeError) && toStringAccessed && valueOfAccessed && !callbackfnAccessed;
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-23', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-23
		description: >
		    Array.prototype.every uses inherited valueOf method when 'length'
		    is an object with an own toString and inherited valueOf methods
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var valueOfAccessed = false;
		        var toStringAccessed = false;
		
		        var proto = {
		            valueOf: function () {
		                valueOfAccessed = true;
		                return 2;
		            }
		        };
		
		        var Con = function () { };
		        Con.prototype = proto;
		
		        var child = new Con();
		
		        child.toString = function () {
		            toStringAccessed = true;
		            return '1';
		        };
		
		        var obj = {
		            0: 12,
		            1: 11,
		            2: 9,
		            length: child
		        };
		
		        return Array.prototype.every.call(obj, callbackfn1) &&
		            !Array.prototype.every.call(obj, callbackfn2) &&
		            valueOfAccessed && !toStringAccessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-24', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-24
		description: >
		    Array.prototype.every - value of 'length' is a positive
		    non-integer, ensure truncation occurs in the proper direction
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var obj = { 0: 12, 1: 11, 2: 9, length: 2.685 };
		
		        return Array.prototype.every.call(obj, callbackfn1) &&
		            !Array.prototype.every.call(obj, callbackfn2);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-25', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-25
		description: Array.prototype.every - value of 'length' is a negative non-integer
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var obj = {
		            0: 12,
		            1: 11,
		            2: 9,
		            length: -4294967294.5
		        };
		
		        return Array.prototype.every.call(obj, callbackfn1) &&
		            Array.prototype.every.call(obj, callbackfn2);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-29', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-29
		description: >
		    Array.prototype.every - value of 'length' is boundary value (2^32
		    + 1)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var obj = {
		            0: 11,
		            1: 9,
		            length: 4294967297
		        };
		
		        return !Array.prototype.every.call(obj, callbackfn1) &&
		            !Array.prototype.every.call(obj, callbackfn2);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-3', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-3
		description: Array.prototype.every - value of 'length' is a number (value is 0)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return val > 10;
		        }
		
		        var obj = { 0: 9, length: 0 };
		
		        return Array.prototype.every.call(obj, callbackfn) && !accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-4', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-4
		description: Array.prototype.every - value of 'length' is a number (value is +0)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return val > 10;
		        }
		
		        var obj = { 0: 9, length: +0 };
		
		        return Array.prototype.every.call(obj, callbackfn) && !accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-5', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-5
		description: Array.prototype.every - value of 'length' is a number (value is -0)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return val > 10;
		        }
		
		        var obj = { 0: 9, length: -0 };
		
		        return Array.prototype.every.call(obj, callbackfn) && !accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-6', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-6
		description: >
		    Array.prototype.every - value of 'length' is a number (value is
		    positive)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var obj = { 0: 12, 1: 11, 2: 9, length: 2 };
		
		        return Array.prototype.every.call(obj, callbackfn1) &&
		            !Array.prototype.every.call(obj, callbackfn2);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-7', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-7
		description: >
		    Array.prototype.every - value of 'length' is a number (value is
		    negative)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn1(val, idx, obj) {
		            return val > 10;
		        }
		
		        function callbackfn2(val, idx, obj) {
		            return val > 11;
		        }
		
		        var obj = { 0: 12, 1: 11, 2: 9, length: -4294967294 }; //length used to exec while loop is 0
		
		        return Array.prototype.every.call(obj, callbackfn1) &&
		            Array.prototype.every.call(obj, callbackfn2);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-8', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-8
		description: >
		    Array.prototype.every - value of 'length' is a number (value is
		    Infinity)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return val > 10;
		        }
		
		        var obj = { 0: 9, length: Infinity };
		
		        return !Array.prototype.every.call(obj, callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-3-9', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-3-9
		description: >
		    Array.prototype.every - value of 'length' is a number (value is
		    -Infinity)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return val > 10;
		        }
		
		        var obj = { 0: 9, length: -Infinity };
		
		        return Array.prototype.every.call(obj, callbackfn) && !accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-4-1', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-4-1
		description: Array.prototype.every throws TypeError if callbackfn is undefined
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		  var arr = new Array(10);
		  try {
		    arr.every();    
		  }
		  catch(e) {
		    if(e instanceof TypeError)
		      return true;  
		  }
		
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-4-10', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-4-10
		description: >
		    Array.prototype.every - the exception is not thrown if exception
		    was thrown by step 2
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var obj = { 0: 11, 1: 12 };
		
		        Object.defineProperty(obj, "length", {
		            get: function () {
		                throw new SyntaxError();
		            },
		            configurable: true
		        });
		
		        try {
		            Array.prototype.every.call(obj, undefined);
		            return false;
		        } catch (ex) {
		            return !(ex instanceof TypeError);
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-4-11', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-4-11
		description: >
		    Array.prototype.every - the exception is not thrown if exception
		    was thrown by step 3
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var obj = { 0: 11, 1: 12 };
		
		        Object.defineProperty(obj, "length", {
		            get: function () {
		                return {
		                    toString: function () {
		                        throw new SyntaxError();
		                    }
		                };
		            },
		            configurable: true
		        });
		
		        try {
		            Array.prototype.every.call(obj, undefined);
		            return false;
		        } catch (ex) {
		            return !(ex instanceof TypeError);
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-4-12', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-4-12
		description: Array.prototype.every - 'callbackfn' is a function
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        function callbackfn(val, idx, obj) {
		            return val > 10;
		        }
		
		        return ![11, 9].every(callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-4-15', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-4-15
		description: >
		    Array.prototype.every - calling with no callbackfn is the same as
		    passing undefined for callbackfn
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        var obj = { 10: 10 };
		        var lengthAccessed = false;
		        var loopAccessed = false;
		
		        Object.defineProperty(obj, "length", {
		            get: function () {
		                lengthAccessed = true;
		                return 20;
		            },
		            configurable: true
		        });
		
		        Object.defineProperty(obj, "0", {
		            get: function () {
		                loopAccessed = true;
		                return 10;
		            },
		            configurable: true
		        });
		
		        try {
		            Array.prototype.every.call(obj);
		            return false;
		        } catch (ex) {
		            return (ex instanceof TypeError) && lengthAccessed && !loopAccessed;
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-4-3', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-4-3
		description: Array.prototype.every throws TypeError if callbackfn is null
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		  var arr = new Array(10);
		  try {
		    arr.every(null);    
		  }
		  catch(e) {
		    if(e instanceof TypeError)
		      return true;  
		  }
		
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-4-4', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-4-4
		description: Array.prototype.every throws TypeError if callbackfn is boolean
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		  var arr = new Array(10);
		  try {
		    arr.every(true);    
		  }
		  catch(e) {
		    if(e instanceof TypeError)
		      return true;  
		  }
		
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-4-5', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-4-5
		description: Array.prototype.every throws TypeError if callbackfn is number
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		  var arr = new Array(10);
		  try {
		    arr.every(5);    
		  }
		  catch(e) {
		    if(e instanceof TypeError)
		      return true;  
		  }
		
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-4-6', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-4-6
		description: Array.prototype.every throws TypeError if callbackfn is string
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		  var arr = new Array(10);
		  try {
		    arr.every("abc");    
		  }
		  catch(e) {
		    if(e instanceof TypeError)
		      return true;  
		  }
		
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-4-7', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-4-7
		description: >
		    Array.prototype.every throws TypeError if callbackfn is Object
		    without a Call internal method
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		  var arr = new Array(10);
		  try {
		    arr.every( {} );    
		  }
		  catch(e) {
		    if(e instanceof TypeError)
		      return true;  
		  }
		
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-4-8', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-4-8
		description: >
		    Array.prototype.every - side effects produced by step 2 are
		    visible when an exception occurs
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var obj = { 0: 11, 1: 12 };
		
		        var accessed = false;
		
		        Object.defineProperty(obj, "length", {
		            get: function () {
		                accessed = true;
		                return 2;
		            },
		            configurable: true
		        });
		
		        try {
		            Array.prototype.every.call(obj, null);
		            return false;
		        } catch (ex) {
		            return ex instanceof TypeError && accessed;
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-4-9', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-4-9
		description: >
		    Array.prototype.every - side effects produced by step 3 are
		    visible when an exception occurs
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var obj = { 0: 11, 1: 12 };
		
		        var accessed = false;
		
		        Object.defineProperty(obj, "length", {
		            get: function () {
		                return {
		                    toString: function () {
		                        accessed = true;
		                        return "2";
		                    }
		                };
		            },
		            configurable: true
		        });
		
		        try {
		            Array.prototype.every.call(obj, null);
		            return false;
		        } catch (ex) {
		            return ex instanceof TypeError && accessed;
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-5-1-s', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-5-1-s
		description: Array.prototype.every - thisArg not passed to strict callbackfn
		flags: [onlyStrict]
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		  var innerThisCorrect = false;
		
		  function callbackfn(val, idx, obj) {
		    "use strict";
		    innerThisCorrect = this===undefined;
		    return true;
		  }
		
		  [1].every(callbackfn);
		  return innerThisCorrect;
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-5-1', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-5-1
		description: Array.prototype.every - thisArg not passed
		includes:
		    - runTestCase.js
		    - fnGlobalObject.js
		---*/
		
		function testcase() {
		
		  function callbackfn(val, idx, obj)
		  {
		    return this === fnGlobalObject();
		  }
		
		  var arr = [1];
		  if(arr.every(callbackfn) === true)
		    return true;    
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-5-10', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-5-10
		description: Array.prototype.every - Array Object can be used as thisArg
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		        var objArray = [];
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return this === objArray;
		        }
		
		
		
		        return [11].every(callbackfn, objArray) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-5-11', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-5-11
		description: Array.prototype.every - String Object can be used as thisArg
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		        var objString = new String();
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return this === objString;
		        }
		
		        
		
		        return [11].every(callbackfn, objString) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-5-12', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-5-12
		description: Array.prototype.every - Boolean Object can be used as thisArg
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		        var objBoolean = new Boolean();
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return this === objBoolean;
		        }
		
		       
		
		        return [11].every(callbackfn, objBoolean) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-5-13', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-5-13
		description: Array.prototype.every - Number Object can be used as thisArg
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		        var objNumber = new Number();
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return this === objNumber;
		        }
		
		        return [11].every(callbackfn, objNumber) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-5-14', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-5-14
		description: Array.prototype.every - the Math object can be used as thisArg
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return this === Math;
		        }
		
		        return [11].every(callbackfn, Math) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-5-15', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-5-15
		description: Array.prototype.every - Date Object can be used as thisArg
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		        var objDate = new Date();
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return this === objDate;
		        }
		
		        return [11].every(callbackfn, objDate) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-5-16', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-5-16
		description: Array.prototype.every - RegExp Object can be used as thisArg
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		        var objRegExp = new RegExp();
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return this === objRegExp;
		        }
		
		        return [11].every(callbackfn, objRegExp) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-5-17', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-5-17
		description: Array.prototype.every - the JSON object can be used as thisArg
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return this === JSON;
		        }
		
		        return [11].every(callbackfn, JSON) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-5-18', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-5-18
		description: Array.prototype.every - Error Object can be used as thisArg
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		        var objError = new RangeError();
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return this === objError;
		        }
		
		        return [11].every(callbackfn, objError) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-5-19', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-5-19
		description: Array.prototype.every - the Arguments object can be used as thisArg
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		        var arg;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return this === arg;
		        }
		
		        (function fun() {
		            arg = arguments;
		        }(1, 2, 3));
		
		        return [11].every(callbackfn, arg) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-5-2', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-5-2
		description: Array.prototype.every - thisArg is Object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		  var res = false;
		  var o = new Object();
		  o.res = true;
		  function callbackfn(val, idx, obj)
		  {
		    return this.res;
		  }
		
		  var arr = [1];
		  if(arr.every(callbackfn, o) === true)
		    return true;    
		
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-5-21', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-5-21
		description: Array.prototype.every - the global object can be used as thisArg
		includes:
		    - runTestCase.js
		    - fnGlobalObject.js
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return this === fnGlobalObject();
		        }
		
		        return [11].every(callbackfn, fnGlobalObject()) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-5-22', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-5-22
		description: Array.prototype.every - boolean primitive can be used as thisArg
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return this.valueOf() === false;
		        }
		
		        return [11].every(callbackfn, false) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-5-23', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-5-23
		description: Array.prototype.every - number primitive can be used as thisArg
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return this.valueOf() === 101;
		        }
		
		        return [11].every(callbackfn, 101) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-5-24', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-5-24
		description: Array.prototype.every - string primitive can be used as thisArg
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return this.valueOf() === "abc";
		        }
		
		        return [11].every(callbackfn, "abc") && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-5-3', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-5-3
		description: Array.prototype.every - thisArg is Array
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		  var res = false;
		  var a = new Array();
		  a.res = true;
		  function callbackfn(val, idx, obj)
		  {
		    return this.res;
		  }
		
		  var arr = [1];
		
		  if(arr.every(callbackfn, a) === true)
		    return true;    
		
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-5-4', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-5-4
		description: >
		    Array.prototype.every - thisArg is object from object
		    template(prototype)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		  var res = false;
		  function callbackfn(val, idx, obj)
		  {
		    return this.res;
		  }
		  
		  function foo(){}
		  foo.prototype.res = true;
		  var f = new foo();
		  var arr = [1];
		
		    if(arr.every(callbackfn,f) === true)
		      return true;    
		
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-5-5', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-5-5
		description: Array.prototype.every - thisArg is object from object template
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		  var res = false;
		  function callbackfn(val, idx, obj)
		  {
		    return this.res;
		  }
		
		  function foo(){}
		  var f = new foo();
		  f.res = true;
		  var arr = [1];
		
		  if(arr.every(callbackfn,f) === true)
		    return true;    
		
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-5-6', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-5-6
		description: Array.prototype.every - thisArg is function
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		  var res = false;
		  function callbackfn(val, idx, obj)
		  {
		    return this.res;
		  }
		
		  function foo(){}
		  foo.res = true;
		  var arr = [1];
		
		  if(arr.every(callbackfn,foo) === true)
		    return true;    
		
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-5-7', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-5-7
		description: Array.prototype.every - built-in functions can be used as thisArg
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return this === eval;
		        }
		
		        return [11].every(callbackfn, eval) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-5-9', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-5-9
		description: Array.prototype.every - Function Object can be used as thisArg
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		        var objFunction = function () { };
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return this === objFunction;
		        }
		
		        return [11].every(callbackfn, objFunction) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-1', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-1
		description: >
		    Array.prototype.every considers new elements added to array after
		    the call
		includes: [runTestCase.js]
		---*/
		
		function testcase() { 
		 
		  var calledForThree = false;
		
		  function callbackfn(val, Idx, obj)
		  {
		    arr[2] = 3;
		    if(val == 3)
		      calledForThree = true;
		    return true;
		  }
		
		  var arr = [1,2,,4,5];
		  
		  var res = arr.every(callbackfn);
		
		  return calledForThree; 
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-2', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-2
		description: >
		    Array.prototype.every considers new value of elements in array
		    after the call
		includes: [runTestCase.js]
		---*/
		
		function testcase() { 
		 
		  function callbackfn(val, Idx, obj)
		  {
		    arr[4] = 6;
		    if(val < 6)
		       return true;
		    else 
		       return false;
		  }
		
		  var arr = [1,2,3,4,5];
		  
		  if(arr.every(callbackfn) === false)    
		      return true;  
		  
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-3', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-3
		description: >
		    Array.prototype.every doesn't visit deleted elements in array
		    after the call
		includes: [runTestCase.js]
		---*/
		
		function testcase() { 
		 
		  function callbackfn(val, Idx, obj)
		  {
		    delete arr[2];
		    if(val == 3)
		       return false;
		    else 
		       return true;
		  }
		
		  var arr = [1,2,3,4,5];
		  
		  if(arr.every(callbackfn) === true)    
		      return true;  
		  
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-4', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-4
		description: >
		    Array.prototype.every doesn't visit deleted elements when
		    Array.length is decreased
		includes: [runTestCase.js]
		---*/
		
		function testcase() { 
		 
		  function callbackfn(val, Idx, obj)
		  {
		    arr.length = 3;
		    if(val < 4)
		       return true;
		    else 
		       return false;
		  }
		
		  var arr = [1,2,3,4,6];
		  
		  if(arr.every(callbackfn) === true)    
		      return true;  
		  
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-5', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-5
		description: >
		    Array.prototype.every doesn't consider newly added elements in
		    sparse array
		includes: [runTestCase.js]
		---*/
		
		function testcase() { 
		 
		  function callbackfn(val, Idx, obj)
		  {
		    arr[1000] = 3;
		    if(val < 3)
		       return true;
		    else 
		       return false;
		  }
		
		  var arr = new Array(10);
		  arr[1] = 1;
		  arr[2] = 2;
		  
		  if(arr.every(callbackfn) === true)    
		      return true;  
		  
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-6', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-6
		description: >
		    Array.prototype.every visits deleted element in array after the
		    call when same index is also present in prototype
		includes: [runTestCase.js]
		---*/
		
		function testcase() { 
		 
		  function callbackfn(val, Idx, obj)
		  {
		    delete arr[2];
		    if(val == 3)
		       return false;
		    else 
		       return true;
		  }
		
		  Array.prototype[2] = 3;
		  var arr = [1,2,3,4,5];
		  
		  var res = arr.every(callbackfn);
		  delete Array.prototype[2];
		
		  if(res === false)    
		      return true;  
		  
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-7', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-7
		description: >
		    Array.prototype.every - Deleting the array itself within the
		    callbackfn of Array.prototype.every is successful once
		    Array.prototype.every is called for all elements
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        var o = new Object();
		        o.arr = [1, 2, 3, 4, 5];
		
		        function callbackfn(val, Idx, obj) {
		            delete o.arr;
		            if (val === Idx + 1)
		                return true;
		            else
		                return false;
		        }
		
		        return o.arr.every(callbackfn) && !o.hasOwnProperty("arr");
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-8', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-8
		description: Array.prototype.every - no observable effects occur if len is 0
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return val > 10;
		        }
		
		        var obj = { 0: 11, 1: 12, length: 0 };
		
		        return Array.prototype.every.call(obj, callbackfn) && !accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-9', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-9
		description: >
		    Array.prototype.every - modifications to length don't change
		    number of iterations
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var called = 0;
		
		        function callbackfn(val, idx, obj) {
		            called++;
		            return val > 10;
		        }
		
		        var obj = { 1: 12, 2: 9, length: 2 };
		
		        Object.defineProperty(obj, "0", {
		            get: function () {
		                obj.length = 3;
		                return 11;
		            },
		            configurable: true
		        });
		
		        return Array.prototype.every.call(obj, callbackfn) && 2 === called;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-b-1', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-b-1
		description: >
		    Array.prototype.every - callbackfn not called for indexes never
		    been assigned values
		includes: [runTestCase.js]
		---*/
		
		function testcase() { 
		 
		  var callCnt = 0.;
		  function callbackfn(val, Idx, obj)
		  {
		    callCnt++;
		    return true;
		  }
		
		  var arr = new Array(10);
		  arr[1] = undefined;  
		  arr.every(callbackfn);
		  if( callCnt === 1)    
		      return true;  
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-b-10', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-b-10
		description: >
		    Array.prototype.every - deleting property of prototype causes
		    prototype index property not to be visited on an Array-like Object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        var accessed = false;
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return idx !== 1;
		        }
		        var arr = { 2: 2, length: 20 };
		
		        Object.defineProperty(arr, "0", {
		            get: function () {
		                delete Object.prototype[1];
		                return 0;
		            },
		            configurable: true
		        });
		
		        try {
		            Object.prototype[1] = 1;
		            return Array.prototype.every.call(arr, callbackfn) && accessed;
		        } finally {
		            delete Object.prototype[1];
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-b-11', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-b-11
		description: >
		    Array.prototype.every - deleting property of prototype causes
		    prototype index property not to be visited on an Array
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        var accessed = false;
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return idx !== 1;
		        }
		        var arr = [0, , 2];
		
		        Object.defineProperty(arr, "0", {
		            get: function () {
		                delete Array.prototype[1];
		                return 0;
		            },
		            configurable: true
		        });
		
		        try {
		            Array.prototype[1] = 1;
		            return arr.every(callbackfn) && accessed;
		        } finally {
		            delete Array.prototype[1];
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-b-12', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-b-12
		description: >
		    Array.prototype.every - deleting own property with prototype
		    property causes prototype index property to be visited on an
		    Array-like object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn(val, idx, obj) {
		            if (idx === 1 && val === 1) {
		                return false;
		            } else {
		                return true;
		            }
		        }
		        var arr = { 0: 0, 1: 111, 2: 2, length: 10 };
		
		        Object.defineProperty(arr, "0", {
		            get: function () {
		                delete arr[1];
		                return 0;
		            },
		            configurable: true
		        });
		
		        try {
		            Object.prototype[1] = 1;
		            return !Array.prototype.every.call(arr, callbackfn);
		        } finally {
		            delete Object.prototype[1];
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-b-13', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-b-13
		description: >
		    Array.prototype.every - deleting own property with prototype
		    property causes prototype index property to be visited on an Array
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn(val, idx, obj) {
		            if (idx === 1 && val === 1) {
		                return false;
		            } else {
		                return true;
		            }
		        }
		        var arr = [0, 111, 2]; 
		        
		        Object.defineProperty(arr, "0", {
		            get: function () {
		                delete arr[1];
		                return 0;
		            },
		            configurable: true
		        });
		
		        try {
		            Array.prototype[1] = 1;
		            return !arr.every(callbackfn);
		        } finally {
		            delete Array.prototype[1];
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-b-14', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-b-14
		description: >
		    Array.prototype.every - decreasing length of array causes index
		    property not to be visited
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        var accessed = false;
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return idx !== 3;
		        }
		        var arr = [0, 1, 2, "last"];
		
		        Object.defineProperty(arr, "0", {
		            get: function () {
		                arr.length = 3;
		                return 0;
		            },
		            configurable: true
		        });
		
		        return arr.every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-b-15', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-b-15
		description: >
		    Array.prototype.every - decreasing length of array with prototype
		    property causes prototype index property to be visited
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn(val, idx, obj) {
		            if (idx === 2 && val === "prototype") {
		                return false;
		            } else {
		                return true;
		            }
		        }
		        var arr = [0, 1, 2];
		
		        try {
		            Object.defineProperty(Array.prototype, "2", {
		                get: function () {
		                    return "prototype";
		                },
		                configurable: true
		            });
		
		            Object.defineProperty(arr, "1", {
		                get: function () {
		                    arr.length = 2;
		                    return 1;
		                },
		                configurable: true
		            });
		
		            return !arr.every(callbackfn);
		        } finally {
		            delete Array.prototype[2];
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-b-16', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-b-16
		description: >
		    Array.prototype.every - decreasing length of array does not delete
		    non-configurable properties
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn(val, idx, obj) {
		            if (idx === 2 && val === "unconfigurable") {
		                return false;
		            } else {
		                return true;
		            }
		        }
		        
		        var arr = [0, 1, 2];
		
		        Object.defineProperty(arr, "2", {
		            get: function () {
		                return "unconfigurable";
		            },
		            configurable: false
		        });
		
		        Object.defineProperty(arr, "1", {
		            get: function () {
		                arr.length = 2;
		                return 1;
		            },
		            configurable: true
		        });
		
		        return !arr.every(callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-b-2', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-b-2
		description: Array.prototype.every - added properties in step 2 are visible here
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn(val, idx, obj) {
		            if (idx === 2 && val === "length") {
		                return false;
		            } else {
		                return true;
		            }
		        }
		        
		        var arr = { };
		
		        Object.defineProperty(arr, "length", {
		            get: function () {
		                arr[2] = "length";
		                return 3;
		            },
		            configurable: true
		        });
		
		        return !Array.prototype.every.call(arr, callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-b-3', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-b-3
		description: >
		    Array.prototype.every - deleted properties in step 2 are visible
		    here
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        var accessed = false;
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return idx !== 2;
		        }
		        var arr = { 2: 6.99, 8: 19};
		
		        Object.defineProperty(arr, "length", {
		            get: function () {
		                delete arr[2];
		                return 10;
		            },
		            configurable: true
		        });
		
		        return Array.prototype.every.call(arr, callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-b-4', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-b-4
		description: >
		    Array.prototype.every - properties added into own object after
		    current position are visited on an Array-like object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        function callbackfn(val, idx, obj) {
		            if (idx === 1 && val === 1) {
		                return false;
		            } else {
		                return true;
		            }
		        }
		        
		        var arr = { length: 2 };
		
		        Object.defineProperty(arr, "0", {
		            get: function () {
		                Object.defineProperty(arr, "1", {
		                    get: function () {
		                        return 1;
		                    },
		                    configurable: true
		                });
		                return 0;
		            },
		            configurable: true
		        });
		
		        return !Array.prototype.every.call(arr, callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-b-5', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-b-5
		description: >
		    Array.prototype.every - properties added into own object after
		    current position are visited on an Array
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn(val, idx, obj) {
		            if (idx === 1 && val === 1) {
		                return false;
		            } else {
		                return true;
		            }
		        }
		
		        var arr = [0, , 2];
		
		        Object.defineProperty(arr, "0", {
		            get: function () {
		                Object.defineProperty(arr, "1", {
		                    get: function () {
		                        return 1;
		                    },
		                    configurable: true
		                });
		                return 0;
		            },
		            configurable: true
		        });
		
		        return !arr.every(callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-b-6', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-b-6
		description: >
		    Array.prototype.every - properties can be added to prototype after
		    current position are visited on an Array-like object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn(val, idx, obj) {
		            if (idx === 1 && val === 6.99) {
		                return false;
		            } else {
		                return true;
		            }
		        }
		        var arr = { length: 2 };
		
		        Object.defineProperty(arr, "0", {
		            get: function () {
		                Object.defineProperty(Object.prototype, "1", {
		                    get: function () {
		                        return 6.99;
		                    },
		                    configurable: true
		                });
		                return 0;
		            },
		            configurable: true
		        });
		
		        try {
		            return !Array.prototype.every.call(arr, callbackfn);
		        } finally {
		            delete Object.prototype[1];
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-b-7', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-b-7
		description: >
		    Array.prototype.every - properties can be added to prototype after
		    current position are visited on an Array
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn(val, idx, obj) {
		            if (idx === 1 && val === 6.99) {
		                return false;
		            } else {
		                return true;
		            }
		        }
		        var arr = [0, , 2];
		
		        Object.defineProperty(arr, "0", {
		            get: function () {
		                Object.defineProperty(Array.prototype, "1", {
		                    get: function () {
		                        return 6.99;
		                    },
		                    configurable: true
		                });
		                return 0;
		            },
		            configurable: true
		        });
		
		        try {
		            return !arr.every(callbackfn);
		        } finally {
		            delete Array.prototype[1];
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-b-8', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-b-8
		description: >
		    Array.prototype.every - deleting own property causes index
		    property not to be visited on an Array-like object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        var accessed = false;
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return idx !== 1;
		        }
		        var obj = { length: 2 };
		
		        Object.defineProperty(obj, "1", {
		            get: function () {
		                return 6.99;
		            },
		            configurable: true
		        });
		
		        Object.defineProperty(obj, "0", {
		            get: function () {
		                delete obj[1];
		                return 0;
		            },
		            configurable: true
		        });
		
		        return Array.prototype.every.call(obj, callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-b-9', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-b-9
		description: >
		    Array.prototype.every - deleting own property causes index
		    property not to be visited on an Array
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        var accessed = false;
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return idx !== 1;
		        }
		        var arr = [1, 2];
		
		        Object.defineProperty(arr, "1", {
		            get: function () {
		                return "6.99";
		            },
		            configurable: true
		        });
		
		        Object.defineProperty(arr, "0", {
		            get: function () {
		                delete arr[1];
		                return 0;
		            },
		            configurable: true
		        });
		
		        return arr.every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-1', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-1
		description: >
		    Array.prototype.every - element to be retrieved is own data
		    property on an Array-like object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var kValue = { };
		        function callbackfn(val, idx, obj) {
		            if (idx === 5) {
		                return val !== kValue;
		            } else {
		                return true;
		            }
		        }
		
		        var obj = { 5: kValue, length: 100 };
		
		        return !Array.prototype.every.call(obj, callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-10', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-10
		description: >
		    Array.prototype.every - element to be retrieved is own accessor
		    property on an Array
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        function callbackfn(val, idx, obj) {
		            if (idx === 2) {
		                return val !== 12;
		            } else {
		                return true;
		            }
		        }
		
		        var arr = [];
		
		        Object.defineProperty(arr, "2", {
		            get: function () {
		                return 12;
		            },
		            configurable: true
		        });
		
		        return !arr.every(callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-11', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-11
		description: >
		    Array.prototype.every - element to be retrieved is own accessor
		    property that overrides an inherited data property on an
		    Array-like object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        function callbackfn(val, idx, obj) {
		            if (idx === 0) {
		                return val === 5;
		            } else {
		                return true;
		            }
		        }
		
		        var proto = { 0: 5, 1: 6 };
		
		        var Con = function () { };
		        Con.prototype = proto;
		
		        var child = new Con();
		        child.length = 10;
		
		        Object.defineProperty(child, "0", {
		            get: function () {
		                return 11;
		            },
		            configurable: true
		        });
		
		        return !Array.prototype.every.call(child, callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-12', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-12
		description: >
		    Array.prototype.every - element to be retrieved is own accessor
		    property that overrides an inherited data property on an Array
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn(val, idx, obj) {
		            if (idx === 0) {
		                return val === 10;
		            } else {
		                return true;
		            }
		        }
		
		        var arr = [];
		        try {
		            Array.prototype[0] = 10;
		
		            Object.defineProperty(arr, "0", {
		                get: function () {
		                    return 111;
		                },
		                configurable: true
		            });
		
		            return !arr.every(callbackfn);
		        } finally {
		            delete Array.prototype[0];
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-13', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-13
		description: >
		    Array.prototype.every - element to be retrieved is own accessor
		    property that overrides an inherited accessor property on an
		    Array-like object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn(val, idx, obj) {
		            if (idx === 1) {
		                return val === 6;
		            } else {
		                return true;
		            }
		        }
		
		        var proto = {};
		
		        Object.defineProperty(proto, "1", {
		            get: function () {
		                return 6;
		            },
		            configurable: true
		        });
		
		        var Con = function () { };
		        Con.prototype = proto;
		
		        var child = new Con();
		        child.length = 10;
		
		        Object.defineProperty(child, "1", {
		            get: function () {
		                return 12;
		            },
		            configurable: true
		        });
		
		
		        return !Array.prototype.every.call(child, callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-14', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-14
		description: >
		    Array.prototype.every - element to be retrieved is own accessor
		    property that overrides an inherited accessor property on an Array
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        function callbackfn(val, idx, obj) {
		            if (idx === 0) {
		                return val === 5;
		            } else {
		                return true;
		            }
		        }
		
		        var arr = [];
		        try {
		            Object.defineProperty(Array.prototype, "0", {
		                get: function () {
		                    return 5;
		                },
		                configurable: true
		            });
		
		            Object.defineProperty(arr, "0", {
		                get: function () {
		                    return 11;
		                },
		                configurable: true
		            });
		
		            return !arr.every(callbackfn);
		        } finally {
		            delete Array.prototype[0];
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-15', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-15
		description: >
		    Array.prototype.every - element to be retrieved is inherited
		    accessor property on an Array-like object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        function callbackfn(val, idx, obj) {
		            if (idx === 1) {
		                return val !== 11;
		            } else {
		                return true;
		            }
		        }
		
		        var proto = {};
		
		        Object.defineProperty(proto, "1", {
		            get: function () {
		                return 11;
		            },
		            configurable: true
		        });
		
		        var Con = function () { };
		        Con.prototype = proto;
		
		        var child = new Con();
		        child.length = 20;
		
		        return !Array.prototype.every.call(child, callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-16', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-16
		description: >
		    Array.prototype.every - element to be retrieved is inherited
		    accessor property on an Array
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        function callbackfn(val, idx, obj) {
		            if (idx === 0) {
		                return val !== 11;
		            } else {
		                return true;
		            }
		        }
		
		        try {
		            Object.defineProperty(Array.prototype, "0", {
		                get: function () {
		                    return 11;
		                },
		                configurable: true
		            });
		
		            return ![, , , ].every(callbackfn);
		        } finally {
		            delete Array.prototype[0];
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-17', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-17
		description: >
		    Array.prototype.every - element to be retrieved is own accessor
		    property without a get function on an Array-like object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return typeof val === "undefined";
		        }
		
		        var obj = { length: 2 };
		        Object.defineProperty(obj, "1", {
		            set: function () { },
		            configurable: true
		        });
		
		        return Array.prototype.every.call(obj, callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-18', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-18
		description: >
		    Array.prototype.every - element to be retrieved is own accessor
		    property without a get function on an Array
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return typeof val === "undefined";
		        }
		
		        var arr = [];
		
		        Object.defineProperty(arr, "0", {
		            set: function () { },
		            configurable: true
		        });
		
		        return arr.every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-19', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-19
		description: >
		    Array.prototype.every - element to be retrieved is own accessor
		    property without a get function that overrides an inherited
		    accessor property on an Array-like object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return typeof val === "undefined";
		        }
		
		        var obj = { length: 2 };
		        Object.defineProperty(obj, "1", {
		            set: function () { },
		            configurable: true
		        });
		        try {
		            Object.prototype[1] = 10;
		            return Array.prototype.every.call(obj, callbackfn) && accessed;
		        } finally {
		            delete Object.prototype[1];
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-2', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-2
		description: >
		    Array.prototype.every - element to be retrieved is own data
		    property on an Array
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var called = 0;
		
		        function callbackfn(val, idx, obj) {
		            called++;
		            return val === 11;
		        }
		
		        return [11].every(callbackfn) && 1 === called;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-20', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-20
		description: >
		    Array.prototype.every - element to be retrieved is own accessor
		    property without a get function that overrides an inherited
		    accessor property on an Array
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return typeof val === "undefined";
		        }
		
		        var arr = [];
		
		        Object.defineProperty(arr, "0", {
		            set: function () { },
		            configurable: true
		        });
		
		        try {
		            Array.prototype[0] = 100;
		            return arr.every(callbackfn) && accessed;
		        } finally {
		            delete Array.prototype[0];
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-21', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-21
		description: >
		    Array.prototype.every - element to be retrieved is inherited
		    accessor property without a get function on an Array-like object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return typeof val === "undefined";
		        }
		
		        var proto = {};
		        Object.defineProperty(proto, "1", {
		            set: function () { },
		            configurable: true
		        });
		
		        var Con = function () { };
		        Con.prototype = proto;
		
		        var child = new Con();
		        child.length = 2;
		
		        return Array.prototype.every.call(child, callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-22', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-22
		description: >
		    Array.prototype.every - element to be retrieved is inherited
		    accessor property without a get function on an Array
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return typeof val === "undefined";
		        }
		
		        try {
		            Object.defineProperty(Array.prototype, "0", {
		                set: function () { },
		                configurable: true
		            });
		
		            return [, ].every(callbackfn) && accessed;
		        } finally {
		            delete Array.prototype[0];
		        }
		
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-23', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-23
		description: >
		    Array.prototype.every - This object is an global object which
		    contains index property
		includes:
		    - runTestCase.js
		    - fnGlobalObject.js
		---*/
		
		function testcase() {
		
		        function callbackfn(val, idx, obj) {
		            if (idx === 0) {
		                return val !== 11;
		            } else {
		                return true;
		            }
		        }
		
		        try {
		            var oldLen = fnGlobalObject().length;
		            fnGlobalObject()[0] = 11;
		            fnGlobalObject().length = 1;
		            return !Array.prototype.every.call(fnGlobalObject(), callbackfn);
		        } finally {
		            delete fnGlobalObject()[0];
		            fnGlobalObject().length = oldLen;
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-25', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-25
		description: >
		    Array.prototype.every - This object is the Arguments object which
		    implements its own property get method (number of arguments is
		    less than number of parameters)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var called = 0;
		
		        function callbackfn(val, idx, obj) {
		            called++;
		            return val === 11;
		        }
		
		        var func = function (a, b) {
		            return Array.prototype.every.call(arguments, callbackfn);
		        };
		
		        return func(11) && called === 1;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-26', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-26
		description: >
		    Array.prototype.every - This object is the Arguments object which
		    implements its own property get method (number of arguments equals
		    number of parameters)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var called = 0;
		
		        function callbackfn(val, idx, obj) {
		            called++;
		            if (idx === 0) {
		                return val === 11;
		            } else if (idx === 1) {
		                return val === 9;
		            } else {
		                return false;
		            }
		        }
		
		        var func = function (a, b) {
		            return Array.prototype.every.call(arguments, callbackfn);
		        };
		
		        return func(11, 9) && called === 2;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-27', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-27
		description: >
		    Array.prototype.every - This object is the Arguments object which
		    implements its own property get method (number of arguments is
		    greater than number of parameters)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var called = 0;
		
		        function callbackfn(val, idx, obj) {
		            called++;
		            if (idx < 2) {
		                return val > 10;
		            } else if (idx === 2) {
		                return val < 10;
		            } else {
		                return false;
		            }
		        }
		
		        var func = function (a, b) {
		            return Array.prototype.every.call(arguments, callbackfn);
		        };
		
		        return func(11, 12, 9) && called === 3;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-28', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-28
		description: >
		    Array.prototype.every - element changed by getter on previous
		    iterations is observed on an Array
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var preIterVisible = false;
		        var arr = [];
		
		        function callbackfn(val, idx, obj) {
		            return val > 10;
		        }
		
		        Object.defineProperty(arr, "0", {
		            get: function () {
		                preIterVisible = true;
		                return 11;
		            },
		            configurable: true
		        });
		
		        Object.defineProperty(arr, "1", {
		            get: function () {
		                if (preIterVisible) {
		                    return 9;
		                } else {
		                    return 11;
		                }
		            },
		            configurable: true
		        });
		
		        return !arr.every(callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-29', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-29
		description: >
		    Array.prototype.every - element changed by getter on previous
		    iterations is observed on an Array-like object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        function callbackfn(val, idx, obj) {
		            return val > 10;
		        }
		
		        var preIterVisible = false;
		        var obj = { length: 2 };
		
		        Object.defineProperty(obj, "0", {
		            get: function () {
		                preIterVisible = true;
		                return 11;
		            },
		            configurable: true
		        });
		
		        Object.defineProperty(obj, "1", {
		            get: function () {
		                if (preIterVisible) {
		                    return 9;
		                } else {
		                    return 13;
		                }
		            },
		            configurable: true
		        });
		
		        return !Array.prototype.every.call(obj, callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-3', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-3
		description: >
		    Array.prototype.every - element to be retrieved is own data
		    property that overrides an inherited data property on an Array
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        function callbackfn(val, idx, obj) {
		            if (idx === 5) {
		                return val === 100;
		            } else {
		                return true;
		            }
		        }
		
		        var proto = { 0: 11, 5: 100 };
		
		        var Con = function () { };
		        Con.prototype = proto;
		
		        var child = new Con();
		        child[5] = "abc";
		        child.length = 10;
		
		        return !Array.prototype.every.call(child, callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-30', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-30
		description: >
		    Array.prototype.every - unnhandled exceptions happened in getter
		    terminate iteration on an Array-like object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		        function callbackfn(val, idx, obj) {
		            if (idx > 1) {
		                accessed = true;
		            }
		            return true;
		        }
		
		        var obj = { 0: 11, 5: 10, 10: 8, length: 20 };
		        Object.defineProperty(obj, "1", {
		            get: function () {
		                throw new RangeError("unhandle exception happened in getter");
		            },
		            configurable: true
		        });
		
		        try {
		            Array.prototype.every.call(obj, callbackfn);
		            return false;
		        } catch (ex) {
		            return (ex instanceof RangeError) && !accessed;
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-31', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-31
		description: >
		    Array.prototype.every - unhandled exceptions happened in getter
		    terminate iteration on an Array
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		        function callbackfn(val, idx, obj) {
		            if (idx > 1) {
		                accessed = true;
		            }
		            return true;
		        }
		
		        var arr = [];
		        arr[5] = 10;
		        arr[10] = 100;
		
		        Object.defineProperty(arr, "1", {
		            get: function () {
		                throw new RangeError("unhandle exception happened in getter");
		            },
		            configurable: true
		        });
		
		        try {
		            arr.every(callbackfn);
		            return false;
		        } catch (ex) {
		            return (ex instanceof RangeError) && !accessed;
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-4', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-4
		description: >
		    Array.prototype.every - element to be retrieved is own data
		    property that overrides an inherited data property on an Array
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        var called = 0;
		        function callbackfn(val, idx, obj) {
		            called++;
		            return val === 12;
		        }
		
		        try {
		            Array.prototype[0] = 11;
		            Array.prototype[1] = 11;
		
		            return [12, 12].every(callbackfn) && called === 2;
		        } finally {
		            delete Array.prototype[0];
		            delete Array.prototype[1];
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-5', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-5
		description: >
		    Array.prototype.every - element to be retrieved is own data
		    property that overrides an inherited accessor property on an
		    Array-like object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        function callbackfn(val, idx, obj) {
		            if (idx === 0) {
		                return val === 5;
		            } else {
		                return true;
		            }
		        }
		
		        var proto = {};
		
		        Object.defineProperty(proto, "0", {
		            get: function () {
		                return 5;
		            },
		            configurable: true
		        });
		
		        var Con = function () { };
		        Con.prototype = proto;
		
		        var child = new Con();
		        child.length = 2;
		        Object.defineProperty(child, "0", {
		            value: 11,
		            configurable: true
		        });
		        child[1] = 12;
		
		        return !Array.prototype.every.call(child, callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-6', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-6
		description: >
		    Array.prototype.every - element to be retrieved is own data
		    property that overrides an inherited accessor property on an Array
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return val === 11;
		        }
		
		        try {
		            Object.defineProperty(Array.prototype, "0", {
		                get: function () {
		                    return 9;
		                },
		                configurable: true
		            });
		            return [11].every(callbackfn) && accessed;
		        } finally {
		            delete Array.prototype[0];
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-7', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-7
		description: >
		    Array.prototype.every - element to be retrieved is inherited data
		    property on an Array-like object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var kValue = 'abc';
		
		        function callbackfn(val, idx, obj) {
		            if (idx === 5) {
		                return val !== kValue;
		            } else {
		                return true;
		            }
		        }
		
		        var proto = { 5: kValue };
		
		        var Con = function () { };
		        Con.prototype = proto;
		
		        var child = new Con();
		        child.length = 10;
		
		        return !Array.prototype.every.call(child, callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-8', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-8
		description: >
		    Array.prototype.every - element to be retrieved is inherited data
		    property on an Array
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        function callbackfn(val, idx, obj) {
		            if (idx === 1) {
		                return val !== 13;
		            } else {
		                return true;
		            }
		        }
		
		        try {
		            Array.prototype[1] = 13;
		            return ![, , , ].every(callbackfn);
		        } finally {
		            delete Array.prototype[1];
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-i-9', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-i-9
		description: >
		    Array.prototype.every - element to be retrieved is own accessor
		    property on an Array-like object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        function callbackfn(val, idx, obj) {
		            if (idx === 0) {
		                return val !== 11;
		            } else {
		                return true;
		            }
		        }
		
		        var obj = { 10: 10, length: 20 };
		
		        Object.defineProperty(obj, "0", {
		            get: function () {
		                return 11;
		            },
		            configurable: true
		        });
		        
		        return !Array.prototype.every.call(obj, callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-ii-1', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-ii-1
		description: Array.prototype.every - callbackfn called with correct parameters
		includes: [runTestCase.js]
		---*/
		
		function testcase() { 
		 
		  function callbackfn(val, Idx, obj)
		  {
		    if(obj[Idx] === val)
		      return true;
		  }
		
		  var arr = [0,1,2,3,4,5,6,7,8,9];
		  
		  if(arr.every(callbackfn) === true)
		    return true;
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-ii-10', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-ii-10
		description: >
		    Array.prototype.every - callbackfn is called with 1 formal
		    parameter
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var called = 0;
		
		        function callbackfn(val) {
		            called++;
		            return val > 10;
		        }
		
		        return [11, 12].every(callbackfn) && 2 === called;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-ii-11', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-ii-11
		description: >
		    Array.prototype.every - callbackfn is called with 2 formal
		    parameter
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var called = 0;
		
		        function callbackfn(val, idx) {
		            called++;
		            return val > 10 && arguments[2][idx] === val;
		        }
		
		        return [11, 12].every(callbackfn) && 2 === called;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-ii-12', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-ii-12
		description: >
		    Array.prototype.every - callbackfn is called with 3 formal
		    parameter
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var called = 0;
		
		        function callbackfn(val, idx, obj) {
		            called++;
		            return val > 10 && obj[idx] === val;
		        }
		
		        return [11, 12, 13].every(callbackfn) && 3 === called;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-ii-13', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-ii-13
		description: >
		    Array.prototype.every - callbackfn that uses arguments object to
		    get parameter value
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var called = 0;
		
		        function callbackfn() {
		            called++;
		            return arguments[2][arguments[1]] === arguments[0];
		        }
		
		        return [11, 12].every(callbackfn) && 2 === called;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-ii-16', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-ii-16
		description: >
		    Array.prototype.every - 'this' of 'callbackfn' is a Boolean object
		    when T is not an object (T is a boolean primitive)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return this.valueOf() !== false;
		        }
		
		        var obj = { 0: 11, length: 2 };
		
		        return !Array.prototype.every.call(obj, callbackfn, false) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-ii-17', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-ii-17
		description: >
		    Array.prototype.every -'this' of 'callbackfn' is a Number object
		    when T is not an object (T is a number primitive)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, o) {
		            accessed = true;
		            return 5 === this.valueOf();
		        }
		
		        var obj = { 0: 11, length: 2 };
		
		        return Array.prototype.every.call(obj, callbackfn, 5) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-ii-18', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-ii-18
		description: >
		    Array.prototype.every - 'this' of 'callbackfn' is an String object
		    when T is not an object (T is a string primitive)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return 'hello' === this.valueOf();
		        }
		
		        var obj = { 0: 11, length: 2 };
		
		        return Array.prototype.every.call(obj, callbackfn, "hello") && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-ii-19', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-ii-19
		description: Array.prototype.every - non-indexed properties are not called
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var called = 0;
		
		        function callbackfn(val, idx, obj) {
		            called++;
		            return val !== 8;
		        }
		
		        var obj = { 0: 11, 10: 12, non_index_property: 8, length: 20 };
		
		        return Array.prototype.every.call(obj, callbackfn) && 2 === called;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-ii-2', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-ii-2
		description: Array.prototype.every - callbackfn takes 3 arguments
		includes: [runTestCase.js]
		---*/
		
		function testcase() { 
		 
		  function callbackfn(val, Idx, obj)
		  {
		    if(arguments.length === 3)   //verify if callbackfn was called with 3 parameters
		       return true;
		  }
		
		  var arr = [0,1,true,null,new Object(),"five"];
		  arr[999999] = -6.6;
		  
		  if(arr.every(callbackfn) === true)
		    return true;
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-ii-20', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-ii-20
		description: >
		    Array.prototype.every - callbackfn called with correct parameters
		    (thisArg is correct)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return 10 === this.threshold;
		        }
		
		        var thisArg = { threshold: 10 };
		
		        var obj = { 0: 11, length: 1 };
		
		        return Array.prototype.every.call(obj, callbackfn, thisArg);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-ii-21', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-ii-21
		description: >
		    Array.prototype.every - callbackfn called with correct parameters
		    (kValue is correct)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            if (idx === 0) {
		                return val === 11;
		            }
		
		            if (idx === 1) {
		                return val === 12;
		            }
		
		        }
		
		        var obj = { 0: 11, 1: 12, length: 2 };
		
		        return Array.prototype.every.call(obj, callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-ii-22', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-ii-22
		description: >
		    Array.prototype.every - callbackfn called with correct parameters
		    (the index k is correct)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            if (val === 11) {
		                return idx === 0;
		            }
		
		            if (val === 12) {
		                return idx === 1;
		            }
		
		        }
		
		        var obj = { 0: 11, 1: 12, length: 2 };
		
		        return Array.prototype.every.call(obj, callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-ii-23', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-ii-23
		description: >
		    Array.prototype.every - callbackfn called with correct parameters
		    (this object O is correct)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var called = 0;
		        var obj = { 0: 11, 1: 12, length: 2 };
		
		        function callbackfn(val, idx, o) {
		            called++;
		            return obj === o;
		        }
		
		        return Array.prototype.every.call(obj, callbackfn) && 2 === called;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-ii-3', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-ii-3
		description: >
		    Array.prototype.every immediately returns false if callbackfn
		    returns false
		includes: [runTestCase.js]
		---*/
		
		function testcase() { 
		 
		  var callCnt = 0;
		  function callbackfn(val, idx, obj)
		  {
		    callCnt++;
		    if(idx > 5)   
		       return false;
		    else
		       return true;
		  }
		
		  var arr = [0,1,2,3,4,5,6,7,8,9];
		  
		  if(arr.every(callbackfn) === false && callCnt === 7) 
		    return true;
		
		
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-ii-4', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-ii-4
		description: >
		    Array.prototype.every - k values are passed in ascending numeric
		    order
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var arr = [0, 1, 2, 3, 4, 5];
		        var lastIdx = 0;
		        var called = 0;
		        function callbackfn(val, idx, o) {
		            called++;
		            if (lastIdx !== idx) {
		                return false;
		            } else {
		                lastIdx++;
		                return true;
		            }
		        }
		
		        return arr.every(callbackfn) &&  arr.length === called;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-ii-5', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-ii-5
		description: >
		    Array.prototype.every - k values are accessed during each
		    iteration and not prior to starting the loop on an Array
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		        var called = 0;
		        var kIndex = [];
		
		        //By below way, we could verify that k would be setted as 0, 1, ..., length - 1 in order, and each value will be setted one time.
		        function callbackfn(val, idx, obj) {
		            called++;
		            //Each position should be visited one time, which means k is accessed one time during iterations.
		            if (typeof kIndex[idx] === "undefined") {
		                //when current position is visited, its previous index should has been visited.
		                if (idx !== 0 && typeof kIndex[idx - 1] === "undefined") {
		                    return false;
		                }
		                kIndex[idx] = 1;
		                return true;
		            } else {
		                return false;
		            }
		        }
		
		        return [11, 12, 13, 14].every(callbackfn, undefined) && 4 === called;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-ii-6', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-ii-6
		description: Array.prototype.every - arguments to callbackfn are self consistent
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		        var thisArg = {};
		        var obj = { 0: 11, length: 1 };
		
		        function callbackfn() {
		            accessed = true;
		            return this === thisArg &&
		                arguments[0] === 11 &&
		                arguments[1] === 0 &&
		                arguments[2] === obj;
		        }
		
		        return Array.prototype.every.call(obj, callbackfn, thisArg) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-ii-7', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-ii-7
		description: >
		    Array.prototype.every - unhandled exceptions happened in
		    callbackfn terminate iteration
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var called = 0;
		
		        function callbackfn(val, idx, obj) {
		            called++;
		            if (called === 1) {
		                throw new Error("Exception occurred in callbackfn");
		            }
		            return true;
		        }
		
		        var obj = { 0: 11, 4: 10, 10: 8, length: 20 };
		
		        try {
		            Array.prototype.every.call(obj, callbackfn);
		            return false;
		        } catch (ex) {
		            return 1 === called;
		        }
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-ii-8', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-ii-8
		description: >
		    Array.prototype.every - element changed by callbackfn on previous
		    iterations is observed
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var obj = { 0: 11, 1: 12, length: 2 };
		
		        function callbackfn(val, idx, o) {
		            if (idx === 0) {
		                obj[idx + 1] = 8;
		            }
		            return val > 10;
		        }
		
		       
		
		        return !Array.prototype.every.call(obj, callbackfn);
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-ii-9', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-ii-9
		description: >
		    Array.prototype.every - callbackfn is called with 0 formal
		    parameter
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var called = 0;
		
		        function callbackfn() {
		            called++;
		            return true;
		        }
		
		        return [11, 12].every(callbackfn) && 2 === called;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-1', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-1
		description: Array.prototype.every - return value of callbackfn is undefined
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		        var obj = { 0: 11, length: 1 };
		
		        function callbackfn(val, idx, o) {
		            accessed = true;
		            return undefined;
		        }
		
		        
		
		        return !Array.prototype.every.call(obj, callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-10', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-10
		description: >
		    Array.prototype.every - return value of callbackfn is a number
		    (value is Infinity)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return Infinity;
		        }
		
		        return [11].every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-11', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-11
		description: >
		    Array.prototype.every - return value of callbackfn is a number
		    (value is -Infinity)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return -Infinity;
		        }
		
		        return [11].every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-12', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-12
		description: >
		    Array.prototype.every - return value of callbackfn is a number
		    (value is NaN)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return NaN;
		        }
		
		        return ![11].every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-13', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-13
		description: >
		    Array.prototype.every - return value of callbackfn is an empty
		    string
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return "";
		        }
		
		        return ![11].every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-14', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-14
		description: >
		    Array.prototype.every - return value of callbackfn is a non-empty
		    string
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return "non-empty string";
		        }
		
		        return [11].every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-15', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-15
		description: >
		    Array.prototype.every - return value of callbackfn is a Function
		    object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return function () { };
		        }
		
		        return [11].every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-16', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-16
		description: >
		    Array.prototype.every - return value of callbackfn is an Array
		    object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return [];
		        }
		
		        return [11].every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-17', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-17
		description: >
		    Array.prototype.every - return value of callbackfn is a String
		    object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return new String();
		        }
		
		        return [11].every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-18', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-18
		description: >
		    Array.prototype.every - return value of callbackfn is a Boolean
		    object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return new Boolean();
		        }
		
		        return [11].every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-19', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-19
		description: >
		    Array.prototype.every - return value of callbackfn is a Number
		    object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return new Number();
		        }
		
		        return [11].every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-2', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-2
		description: Array.prototype.every - return value of callbackfn is null
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		        var obj = { 0: 11, length: 1 };
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return null;
		        }
		
		        
		
		        return !Array.prototype.every.call(obj, callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-20', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-20
		description: >
		    Array.prototype.every - return value of callbackfn is the Math
		    object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return Math;
		        }
		
		        return [11].every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-21', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-21
		description: Array.prototype.every - return value of callbackfn is a Date object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return new Date();
		        }
		
		        return [11].every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-22', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-22
		description: >
		    Array.prototype.every - return value of callbackfn is a RegExp
		    object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return new RegExp();
		        }
		
		        return [11].every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-23', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-23
		description: >
		    Array.prototype.every - return value of callbackfn is the JSON
		    object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return JSON;
		        }
		
		        return [11].every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-24', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-24
		description: >
		    Array.prototype.every - return value of callbackfn is an Error
		    object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return new EvalError();
		        }
		
		        return [11].every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-25', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-25
		description: >
		    Array.prototype.every - return value of callbackfn is the
		    Arguments object
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return arguments;
		        }
		
		        return [11].every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-27', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-27
		description: >
		    Array.prototype.every - return value of callbackfn is the global
		    object
		includes:
		    - runTestCase.js
		    - fnGlobalObject.js
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return fnGlobalObject();
		        }
		
		        return [11].every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-28', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-28
		description: Array.prototype.every - false prevents further side effects
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var result = false;
		        var obj = { length: 20 };
		
		        function callbackfn(val, idx, obj) {
		            if (idx > 1) {
		                result = true;
		            }
		            return val > 10;
		        }
		
		        Object.defineProperty(obj, "0", {
		            get: function () {
		                return 11;
		            },
		            configurable: true
		        });
		
		        Object.defineProperty(obj, "1", {
		            get: function () {
		                return 8;
		            },
		            configurable: true
		        });
		
		        Object.defineProperty(obj, "2", {
		            get: function () {
		                result = true;
		                return 8;
		            },
		            configurable: true
		        });
		
		        return !Array.prototype.every.call(obj, callbackfn) && !result;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-29', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-29
		description: >
		    Array.prototype.every - return value (new Boolean(false)) of
		    callbackfn is treated as true value
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return new Boolean(false);
		        }
		
		        return [11].every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-3', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-3
		description: >
		    Array.prototype.every - return value of callbackfn is a boolean
		    (value is false)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		        var obj = { 0: 11, length: 1 };
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return false;
		        }
		
		        return !Array.prototype.every.call(obj, callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-4', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-4
		description: >
		    Array.prototype.every - return value of callbackfn is a boolean
		    (value is true)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		        var obj = { 0: 11, length: 1 };
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return true;
		        }
		
		       
		
		        return Array.prototype.every.call(obj, callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-5', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-5
		description: >
		    Array.prototype.every - return value of callbackfn is a number
		    (value is 0)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return 0;
		        }
		
		        return ![11].every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-6', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-6
		description: >
		    Array.prototype.every - return value of callbackfn is a number
		    (value is +0)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return +0;
		        }
		
		        return ![11].every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-7', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-7
		description: >
		    Array.prototype.every - return value of callbackfn is a nunmber
		    (value is -0)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return -0;
		        }
		
		        return ![11].every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-8', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-8
		description: >
		    Array.prototype.every - return value of callbackfn is a number
		    (value is positive number)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return 5;
		        }
		
		        return [11].every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-7-c-iii-9', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-7-c-iii-9
		description: >
		    Array.prototype.every - return value of callbackfn is a number
		    (value is negative number)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		        var accessed = false;
		
		        function callbackfn(val, idx, obj) {
		            accessed = true;
		            return -5;
		        }
		
		        return [11].every(callbackfn) && accessed;
		    }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-8-1', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-8-1
		description: Array.prototype.every returns true if 'length' is 0 (empty array)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		  function cb() {}
		  var i = [].every(cb);
		  if (i === true) {
		    return true;
		  }
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-8-10', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-8-10
		description: Array.prototype.every - subclassed array when length is reduced
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		  foo.prototype = new Array(1, 2, 3);
		  function foo() {}
		  var f = new foo();
		  f.length = 2;
		  
		  function cb(val)
		  {
		    if(val>2)
		      return false;
		    else
		      return true;    
		  }
		  var i = f.every(cb);
		  
		  if (i === true) {
		    return true;
		  }
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-8-11', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-8-11
		description: >
		    Array.prototype.every returns true when all calls to callbackfn
		    return true
		includes: [runTestCase.js]
		---*/
		
		function testcase() { 
		 
		  var callCnt = 0;
		  function callbackfn(val, idx, obj)
		  {
		    callCnt++;
		    return true;
		  }
		
		  var arr = [0,1,2,3,4,5,6,7,8,9];
		  
		  if(arr.every(callbackfn) === true && callCnt === 10) 
		    return true;
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-8-12', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-8-12
		description: >
		    Array.prototype.every doesn't mutate the array on which it is
		    called on
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		
		  function callbackfn(val, idx, obj)
		  {
		    return true;
		  }
		  var arr = [1,2,3,4,5];
		  arr.every(callbackfn);
		  if(arr[0] === 1 &&
		     arr[1] === 2 &&
		     arr[2] === 3 &&
		     arr[3] === 4 &&
		     arr[4] === 5)
		  {
		    return true;
		  }
		
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-8-13', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-8-13
		description: Array.prototype.every doesn't visit expandos
		includes: [runTestCase.js]
		---*/
		
		function testcase() { 
		 
		  var callCnt = 0;
		  function callbackfn(val, idx, obj)
		  {
		    callCnt++;
		    return true;
		  }
		
		  var arr = [0,1,2,3,4,5,6,7,8,9];
		  arr["i"] = 10;
		  arr[true] = 11;
		  
		  if(arr.every(callbackfn) === true && callCnt === 10) 
		    return true;
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-8-2', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-8-2
		description: >
		    Array.prototype.every returns true if 'length' is 0 (subclassed
		    Array, length overridden to null (type conversion))
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		  foo.prototype = new Array(1, 2, 3);
		  function foo() {}
		  var f = new foo();
		  f.length = null;
		  
		  function cb(){}
		  var i = f.every(cb);
		  
		  if (i === true) {
		    return true;
		  }
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-8-3', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-8-3
		description: >
		    Array.prototype.every returns true if 'length' is 0 (subclassed
		    Array, length overridden to false (type conversion))
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		  foo.prototype = new Array(1, 2, 3);
		  function foo() {}
		  var f = new foo();
		  f.length = false;
		
		  function cb(){}
		  var i = f.every(cb);
		  
		  if (i === true) {
		    return true;
		  }
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-8-4', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-8-4
		description: >
		    Array.prototype.every returns true if 'length' is 0 (subclassed
		    Array, length overridden to 0 (type conversion))
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		  foo.prototype = new Array(1, 2, 3);
		  function foo() {}
		  var f = new foo();
		  f.length = 0;
		
		  function cb(){}
		  var i = f.every(cb);
		  
		  if (i === true) {
		    return true;
		  }
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-8-5', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-8-5
		description: >
		    Array.prototype.every returns true if 'length' is 0 (subclassed
		    Array, length overridden to '0' (type conversion))
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		  foo.prototype = new Array(1, 2, 3);
		  function foo() {}
		  var f = new foo();
		  f.length = '0';
		  
		  function cb(){}
		  var i = f.every(cb);
		  
		  if (i === true) {
		    return true;
		  }
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-8-6', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-8-6
		description: >
		    Array.prototype.every returns true if 'length' is 0 (subclassed
		    Array, length overridden with obj with valueOf)
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		  foo.prototype = new Array(1, 2, 3);
		  function foo() {}
		  var f = new foo();
		  
		  var o = { valueOf: function () { return 0;}};
		  f.length = o;
		  
		  function cb(){}
		  var i = f.every(cb);
		  
		  if (i === true) {
		    return true;
		  }
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-8-7', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-8-7
		description: >
		    Array.prototype.every returns true if 'length' is 0 (subclassed
		    Array, length overridden with obj w/o valueOf (toString))
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		  foo.prototype = new Array(1, 2, 3);
		  function foo() {}
		  var f = new foo();
		  
		  var o = { toString: function () { return '0';}};
		  f.length = o;
		  
		  // objects inherit the default valueOf method of the Object object;
		  // that simply returns the itself. Since the default valueOf() method
		  // does not return a primitive value, ES next tries to convert the object
		  // to a number by calling its toString() method and converting the
		  // resulting string to a number.
		  function cb(){}
		  var i = f.every(cb);
		  
		  if (i === true) {
		    return true;
		  }
		 }
		runTestCase(testcase);
		
	});
	specify('15.4.4.16-8-8', function () {
		// Copyright (c) 2012 Ecma International.  All rights reserved.
		// Ecma International makes this code available under the terms and conditions set
		// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
		// "Use Terms").   Any redistribution of this code must retain the above
		// copyright and this notice and otherwise comply with the Use Terms.
		
		/*---
		es5id: 15.4.4.16-8-8
		description: >
		    Array.prototype.every returns true if 'length' is 0 (subclassed
		    Array, length overridden with []
		includes: [runTestCase.js]
		---*/
		
		function testcase() {
		  foo.prototype = new Array(1, 2, 3);
		  function foo() {}
		  var f = new foo();
		  
		  f.length = [];
		  
		  // objects inherit the default valueOf method of the Object object;
		  // that simply returns the itself. Since the default valueOf() method
		  // does not return a primitive value, ES next tries to convert the object
		  // to a number by calling its toString() method and converting the
		  // resulting string to a number.
		  //
		  // The toString( ) method on Array converts the array elements to strings,
		  // then returns the result of concatenating these strings, with commas in
		  // between. An array with no elements converts to the empty string, which
		  // converts to the number 0. If an array has a single element that is a
		  // number n, the array converts to a string representation of n, which is
		  // then converted back to n itself. If an array contains more than one element,
		  // or if its one element is not a number, the array converts to NaN.
		
		  function cb(){}
		  var i = f.every(cb);
		  
		  if (i === true) {
		    return true;
		  }
		 }
		runTestCase(testcase);
		
	});
});
