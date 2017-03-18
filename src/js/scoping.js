{
    console.log(`=========== Scoping examples ===========`);

    var a = new Array('a', 'b', 'c');
    var b = new Array('d', 'e', 'f');

    let x = new Array('1', '2');
    let y = new Array('3', '4');

    for (let i = 0; i < a.length; i++) {
        let x = a[i]
        console.log(`Value x[${i}]:`, x);
    }
    for (let i = 0; i < b.length; i++) {
        let y = b[i]
        console.log(`Value y[${i}]:`, y);
    }

    console.log(`Value array x:`, x);
    console.log(`Value array y:`, y);

    let callbacks = []
    for (let i = 0; i <= 2; i++) {
        callbacks[i] = function() {
            return i * 2
        }
    }
    console.log(`callback[0]:`, callbacks[0]() === 0);
    console.log(`callback[1]:`, callbacks[1]() === 2);
    console.log(`callback[2]:`, callbacks[2]() === 4);

    {
        function foo() {
            return 1;
        }
        console.log(`Value foo():`, foo() === 1); {
            function foo() {
                return 2;
            }
            console.log(`Value foo():`, foo() === 2);
        }
        console.log(`Value foo():`, foo() === 1);
    }

}
