"use strict";

{
    console.log("=========== Arrow functions examples ===========");

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

    console.log("Array odds:", odds);
    console.log("Array pairs:", pairs);
    console.log("Array nums:", nums);

    var nums = new Array(2, 5, 3, 6, 8, 4, 5, 1, 5);
    var fives = new Array();

    nums.forEach(function (v) {
        if (v % 5 === 0) fives.push(v);
    });

    console.log("Array fives:", fives);

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

    console.log("Array example.nums:", example.fives);
}