{
    console.log(`
    ************** Enhanced Object Properties examples **************

                      === Property Shorthand ===
                 `);

    let x = 1;
    let y = 2;

    let obj = {
        x,
        y
    };
    console.log(`Value obj:`, JSON.stringify(obj));

    console.log(`
                    === Computed Property Names ===
              `);

    let quux = () => ` foo`;

    let obj2 = {
        foo: "bar",
        ["baz" + quux()]: 42
    };

    console.log(`Value obj2:`, JSON.stringify(obj2));

    console.log(`
                       === Method Properties ===
              `);

    let obj3 = {
        foo(a, b) {
            a + b;
        },
        bar(x, y) {
            x * y;
        },
        * quux2(x, y) {
            x + y;
        }
    };

    console.log(`Value obj3:`, obj3);

}
