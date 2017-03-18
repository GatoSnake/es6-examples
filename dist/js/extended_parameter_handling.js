"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

{
    var f = function f(x) {
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 42;

        return x + y + z;
    };

    var g = function g(x, y) {
        return (x + y) * (arguments.length <= 2 ? 0 : arguments.length - 2);
    };

    console.log("=========== Extended parameter handling examples ===========");

    console.log("Value function f:", f(1) === 50);

    var a = new Array(1, 2, 3, 4, 5);

    console.log("Value function g:", g(1, 2, "hello", true, 7) === 9);

    var params = ["hello", true, 7];
    var other = [1, 2].concat(params); // [ 1, 2, "hello", true, 7 ]
    console.log("Value function g with array:", g.apply(undefined, [1, 2].concat(params)) === 9);

    var str = "foo";
    var chars = [].concat(_toConsumableArray(str)); // [ "f", "o", "o" ]
    console.log("Value chars array:", chars);
}