'use strict';

{
    console.log('=========== Scoping examples ===========');

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

    console.log('Array x:', x);
    console.log('Array y:', y);

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