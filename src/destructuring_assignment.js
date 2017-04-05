{
    console.log(`
      ************** Destructuring Assignment examples **************

                          === Array Matching ===
                      `);

    var list = [1, 2, 3];
    var [a, , b] = list;
    console.log(`Value a:`, a);
    console.log(`Value b:`, b);

    [b, a] = [a, b];
    console.log(`Value a:`, a);
    console.log(`Value b:`, b);

    console.log(`
                === Object Matching, Shorthand Notation ===
              `);

    function getASTNode() {
        return {
            op: 1,
            lhs: 2,
            rhs: 3
        };
    };

    var {
        op,
        lhs,
        rhs
    } = getASTNode();

    console.log(`Value op:`, op);
    console.log(`Value lhs:`, lhs);
    console.log(`Value rhs:`, rhs);

    console.log(`
                 === Object Matching, Deep Matching ===
              `);

    function getASTNode2() {
        return {
            op: 1,
            lhs: {
                op: 2
            },
            rhs: 3
        };
    };

    var {
        op: a,
        lhs: {
            op: b
        },
        rhs: c
    } = getASTNode2();

    console.log(`Value a:`, a);
    console.log(`Value b:`, b);
    console.log(`Value c:`, c);

    console.log(`
            === Object And Array Matching, Default Values ===
              `);

    var obj = {
        a: 1
    };
    var {
        a,
        b = 2
    } = obj;

    console.log(`Value a:`, a);
    console.log(`Value b:`, b);

    var list = [1];
    var [x, y = 2] = list;

    console.log(`Value x:`, x);
    console.log(`Value y:`, y);

    console.log(`
                   === Parameter Context Matching ===
              `);

    function f([name, val]) {
        console.log(name, val);
    }

    function g({name: n, val: v}) {
        console.log(n, v);
    }

    function h({name, val}) {
        console.log(name, val);
    }

    f(["bar", 42]);
    g({name: "foo", val: 7});
    h({name: "bar", val: 42});

    console.log(`
                    === Fail-Soft Destructuring ===
              `);

    var list = [7, 42];
    var [a = 1, b = 2, c = 3, d] = list;
    console.log(`Compare a === 7:`, a === 7);
    console.log(`Compare b === 42:`, b === 42);
    console.log(`Compare c === 3:`, c === 3);
    console.log(`Compare d === undefined:`, d === undefined);

}
