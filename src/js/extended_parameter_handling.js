{
    console.log(`=========== Extended parameter handling examples ===========`);

    function function1(x, y = 7, z = 42) {
        return x + y + z;
    }
    console.log(`Compare function1() === 50:`, function1(1) === 50);

    var a = new Array(1, 2, 3, 4, 5);

    function function2(x, y, ...a) {
        return (x + y) * a.length;
    }
    console.log(`Compare function2() === 9:`, function2(1, 2, "hello", true, 7) === 9);

    var params = ["hello", true, 7];
    var other = [1, 2, ...params]; // [ 1, 2, "hello", true, 7 ]
    console.log(`Compare function2() === 9:`, function2(1, 2, ...params) === 9);

    var str = "foo";
    var chars = [...str]; // [ "f", "o", "o" ]
    console.log(`Array chars:`, chars);
}
