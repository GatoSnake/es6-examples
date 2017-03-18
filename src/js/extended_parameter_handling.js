{
    console.log(`=========== Extended parameter handling examples ===========`);

    function f(x, y = 7, z = 42) {
        return x + y + z;
    }
    console.log(`Value function f:`, f(1) === 50);

    var a = new Array(1, 2, 3, 4, 5);

    function g(x, y, ...a) {
        return (x + y) * a.length;
    }
    console.log(`Value function g:`, g(1, 2, "hello", true, 7) === 9);

    var params = ["hello", true, 7];
    var other = [1, 2, ...params]; // [ 1, 2, "hello", true, 7 ]
    console.log(`Value function g with array:`, g(1, 2, ...params) === 9);

    var str = "foo";
    var chars = [...str]; // [ "f", "o", "o" ]
    console.log(`Value chars array:`, chars);
}
