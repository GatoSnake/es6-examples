(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

{
    console.log("\n      ************** Arrow functions examples **************\n\n                    === Expression Bodies ===\n      ");

    var evens = new Array(1, 2, 3);

    var odds = evens.map(function (v) {
        return v + 1;
    });
    var pairs = evens.map(function (v) {
        return {
            even: v,
            odd: v + 1
        };
    });
    var nums = evens.map(function (v, i) {
        return v + i;
    });

    console.log("Array odds:", JSON.stringify(odds));
    console.log("Array pairs:", JSON.stringify(pairs));
    console.log("Array nums:", JSON.stringify(nums));

    console.log("\n                    === Statement Bodies ===\n              ");

    nums = new Array(2, 5, 3, 6, 8, 4, 5, 1, 5);
    var fives = new Array();

    nums.forEach(function (v) {
        if (v % 5 === 0) fives.push(v);
    });

    console.log("Array fives:", JSON.stringify(fives));

    console.log("\n                      === Lexical this ===\n              ");

    var example = {
        nums: [2, 5, 3, 6, 8, 4, 5, 1, 5],
        fives: [],
        getFives: function getFives() {
            var _this = this;

            this.nums.forEach(function (v) {
                if (v % 5 === 0) _this.fives.push(v);
            });
        }
    };

    example.getFives();

    console.log("Array example.nums:", JSON.stringify(example.fives));
}

},{}],2:[function(require,module,exports){
"use strict";

{
  console.log("\n      ************** Constants examples **************\n      ");
  var PI = 3.141593;
  console.log("Compare constant PI > 3.0:", PI > 3.0);
}

},{}],3:[function(require,module,exports){
"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

{
    console.log("\n    ************** Enhanced Object Properties examples **************\n\n                      === Property Shorthand ===\n                 ");

    var x = 1;
    var y = 2;

    var obj = {
        x: x,
        y: y
    };
    console.log("Value obj:", obj);

    console.log("\n                    === Computed Property Names ===\n              ");

    var quux = function quux() {
        return " foo";
    };

    var obj2 = _defineProperty({
        foo: "bar"
    }, "baz" + quux(), 42);

    console.log("Value obj2:", obj2);

    console.log("\n                       === Method Properties ===\n              ");

    // let obj3 = {
    //     foo(a, b) {
    //         a + b;
    //     },
    //     bar(x, y) {
    //         x * y;
    //     },
    //     * quux2(x, y) {
    //         x + y;
    //     }
    // };
    //
    // console.log(obj3);
}

},{}],4:[function(require,module,exports){
"use strict";

{
    console.log("\n    ************** Enhanced Regular Expression examples **************\n\n               === Regular Expression Sticky Matching ===\n                 ");

    //example one

    var message = "My name is Foo and my lastname is Bar.";
    var pattern = new RegExp("my [a-zA-Z]+", "y");

    console.log("Return pattern /my [a-zA-Z]+/y:", pattern.exec(message));
    console.log("Last index pattern:", pattern.lastIndex);

    pattern.lastIndex = 19;

    console.log("Return pattern /my [a-zA-Z]+/y with lastIndex 19:", pattern.exec(message));
    console.log("Last index pattern:", pattern.lastIndex);

    console.log("Return pattern /my [a-zA-Z]+/y:", pattern.exec(message));
    console.log("Last index pattern:", pattern.lastIndex);

    //example two
    var parser = function parser(input, match) {
        for (var pos = 0, lastPos = input.length; pos < lastPos; pos++) {
            for (var i = 0; i < match.length; i++) {
                match[i].pattern.lastIndex = pos;
                var found = void 0;
                if ((found = match[i].pattern.exec(input)) !== null) {
                    match[i].action(found);
                    pos = match[i].pattern.lastIndex;
                    break;
                }
            }
        }
    };

    var report = function report(match) {
        console.log("Function report:", match);
    };

    parser("Foo 1 Bar 7 Baz 42", [{
        pattern: new RegExp("Foo\\s+(\\d+)", "y"),
        action: function action(match) {
            return report(match);
        }
    }, {
        pattern: new RegExp("Bar\\s+(\\d+)", "y"),
        action: function action(match) {
            return report(match);
        }
    }, {
        pattern: new RegExp("Baz\\s+(\\d+)", "y"),
        action: function action(match) {
            return report(match);
        }
    }, {
        pattern: new RegExp("\\s*", "y"),
        action: function action(match) {}
    }]);
}

},{}],5:[function(require,module,exports){
"use strict";

{
    console.log("\n      ************** Extended literals examples **************\n\n                   === Binary & Ocal Literal ===\n                   ");

    console.log("Compare binary 0b111110111 === 503:", 503 === 503);
    console.log("Compare octal 0o767 === 503:", 503 === 503);

    console.log("\n              === Unicode String & RegExp Literal ===\n              ");

    console.log("Compare \"\uD842\uDFB7\".length === 2:", "𠮷".length === 2);
    console.log("Compare \"\uD842\uDFB7\".match(/./u)[0].length === 2:", "𠮷".match(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/)[0].length === 2);
    console.log("Compare \"\uD842\uDFB7\" === \"\\uD842\\uDFB7\":", "𠮷" === "\uD842\uDFB7");
    console.log("Compare \"\uD842\uDFB7\" === \"\\u{20BB7}\":", "𠮷" === "\uD842\uDFB7");
    console.log("Compare \"\uD842\uDFB7\".codePointAt(0) == 0x20BB7:", "𠮷".codePointAt(0) == 0x20BB7);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = "𠮷"[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var codepoint = _step.value;
            console.log("Value codepoint:", codepoint);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

},{}],6:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

{
    var function1 = function function1(x) {
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 42;

        return x + y + z;
    };

    var function2 = function function2(x, y) {
        return (x + y) * (arguments.length <= 2 ? 0 : arguments.length - 2);
    };

    console.log("\n      ************** Extended parameter handling examples **************\n\n                       === Default Parameter Values ===\n       ");

    console.log("Compare function1() === 50:", function1(1) === 50);

    console.log("\n                           === Rest Parameter ===\n              ");

    var a = new Array(1, 2, 3, 4, 5);

    console.log("Compare function2() === 9:", function2(1, 2, "hello", true, 7) === 9);

    console.log("\n                           === Spread Operator ===\n              ");

    var params = ["hello", true, 7];
    console.log("Compare function2() === 9:", function2.apply(undefined, [1, 2].concat(params)) === 9);
    var other = [1, 2].concat(params);
    console.log("Array other:", JSON.stringify(other));

    var str = "foo";
    var chars = [].concat(_toConsumableArray(str));
    console.log("Array chars:", JSON.stringify(chars));
}

},{}],7:[function(require,module,exports){
'use strict';

require('./constants');
require('./scoping');
require('./arrow_functions');
require('./extended_parameter_handling');
require('./template_literals');
require('./extended_literals');
require('./enhanced_regular_expression');
require('./enhanced_object_properties');

},{"./arrow_functions":1,"./constants":2,"./enhanced_object_properties":3,"./enhanced_regular_expression":4,"./extended_literals":5,"./extended_parameter_handling":6,"./scoping":8,"./template_literals":9}],8:[function(require,module,exports){
'use strict';

{
    console.log('\n        ************** Scoping examples **************\n\n                === Block-Scoped Variables ===\n        ');

    var a = new Array('a', 'b', 'c');
    var b = new Array('d', 'e', 'f');

    var x = new Array('1', '2');
    var y = new Array('3', '4');

    for (var i = 0; i < a.length; i++) {
        var _x = a[i];
        console.log('Value x[' + i + ']:', _x);
    }
    for (var _i = 0; _i < b.length; _i++) {
        var _y = b[_i];
        console.log('Value y[' + _i + ']:', _y);
    }

    console.log('Array x:', JSON.stringify(x));
    console.log('Array y:', JSON.stringify(y));

    var callbacks = [];

    var _loop = function _loop(_i2) {
        callbacks[_i2] = function () {
            return _i2 * 2;
        };
    };

    for (var _i2 = 0; _i2 <= 2; _i2++) {
        _loop(_i2);
    }
    console.log('Compare callback[0] === 0:', callbacks[0]() === 0);
    console.log('Compare callback[1] === 2:', callbacks[1]() === 2);
    console.log('Compare callback[2] === 4:', callbacks[2]() === 4);

    console.log('\n                === Block-Scoped Functions ===\n                ');

    {
        var foo = function foo() {
            return 1;
        };

        console.log('Compare foo() === 1:', foo() === 1);

        {
            var _foo = function _foo() {
                return 2;
            };

            console.log('Compare foo() === 2:', _foo() === 2);
        }

        console.log('Compare foo() === 1:', foo() === 1);
    }
}

},{}],9:[function(require,module,exports){
"use strict";

var _templateObject = _taggedTemplateLiteral(["http://example.com/foo?bar=", "&quux=", ""], ["http://example.com/foo?bar=", "&quux=", ""]),
    _templateObject2 = _taggedTemplateLiteral(["foo\n", "bar"], ["foo\\n", "bar"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

{
    var get = function get(array, param1, param2) {
        console.log("Value params get():", JSON.stringify(array), param1, param2);
        var url = "" + array[0] + param1 + array[1] + param2;
        console.log("Value url:", url);
    };

    var quux = function quux(strings) {
        console.log("Compare strings[0] === \"foo\\n\":", strings[0] === "foo\n");
        console.log("Compare strings[1] === \"bar\":", strings[1] === "bar");
        console.log("Compare values[0] === 42:", (arguments.length <= 1 ? undefined : arguments[1]) === 42);
        console.log("Compare strings.raw[0] === \"foo\\\\n\":", strings.raw[0] === "foo\\n");
        console.log("Compare strings.raw[1] === \"bar\":", strings.raw[1] === "bar");
    };

    console.log("\n      ************** Template literals examples **************\n\n                    === String Interpolation ===\n                    ");

    var customer = {
        name: "Foo"
    };
    var card = {
        amount: 7,
        product: "Bar",
        unitprice: 42
    };
    var message = "Hello " + customer.name + ",\nwant to buy " + card.amount + " " + card.product + " for\na total of " + card.amount * card.unitprice + " bucks?";
    console.log("Value message:", message);

    console.log("\n                    === Custom Interpolation ===\n              ");

    var bar = "Hola";
    var baz = "Mundo";
    var asd = "Cristhian";

    get(_templateObject, bar + baz, asd);

    console.log("\n                     === Raw String Access ===\n              ");

    quux(_templateObject2, 42);

    console.log("Compare String.war:", String.raw(_templateObject2, 42) === "foo\\n42bar");
}

},{}]},{},[7]);
