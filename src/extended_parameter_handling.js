{
    console.log(`
      ************** Extended parameter handling examples **************

                       === Default Parameter Values ===
       `);

    function function1(x, y = 7, z = 42) {
        return x + y + z;
    }
    console.log(`Compare function1() === 50:`, function1(1) === 50);

    console.log(`
                           === Rest Parameter ===
              `);

    let a = new Array(1, 2, 3, 4, 5);

    function function2(x, y, ...a) {
        return (x + y) * a.length;
    }
    console.log(`Compare function2() === 9:`, function2(1, 2, "hello", true, 7) === 9);

    console.log(`
                           === Spread Operator ===
              `);

    let params = ["hello", true, 7];
    console.log(`Compare function2() === 9:`, function2(1, 2, ...params) === 9);
    let other = [1, 2, ...params];
    console.log(`Array other:`, JSON.stringify(other));

    let str = "foo";
    let chars = [...str];
    console.log(`Array chars:`, JSON.stringify(chars));
}
