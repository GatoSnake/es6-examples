{
    console.log(`
        ************** New Built-In Methods examples **************

                    === Object Property Assignment ===
    `);

    {
        var dst = {
            quux: 0
        };
        var src1 = {
            foo: 1,
            bar: 2
        };
        var src2 = {
            foo: 3,
            baz: 4
        };
        Object.assign(dst, src1, src2);
        console.log(`Value dst.quux:`, dst.quux);
        console.log(`Value dst.foo:`, dst.foo);
        console.log(`Value dst.bar:`, dst.bar);
        console.log(`Value dst.baz:`, dst.baz);
    }

    console.log(`
                      === Array Element Finding ===
    `);

    {
        let find = [1, 3, 4, 2].find(x => x > 3);
        console.log(`Find value x > 3:`, find);
    }

    console.log(`
                        === String Repeating ===
    `);

    {
        let repeat1 = ' '.repeat(4 * 2);
        let repeat2 = 'foo'.repeat(3);
        console.log(`' '.repeat(4 * 2):`, repeat1);
        console.log(`'foo'.repeat(3):`, repeat2);
    }

    console.log(`
                        === String Searching ===
    `);

    {
        console.log(`'hello'.startsWith('ello', 1):`, 'hello'.startsWith('ello', 1));
        console.log(`'hello'.endsWith('hell', 4):`, 'hello'.endsWith('hell', 4));
        console.log(`'hello'.includes('ell'):`, 'hello'.includes('ell'));
        console.log(`'hello'.includes('ell', 1):`, 'hello'.includes('ell', 1));
        console.log(`'hello'.includes('ell', 2):`, 'hello'.includes('ell', 2));
    }

    console.log(`
                      === Number Type Checking ===
    `);

    {
        console.log(`Number.isNaN(42):`, Number.isNaN(42));
        console.log(`Number.isNaN(NaN):`, Number.isNaN(NaN));
        console.log(`Number.isFinite(Infinity):`, Number.isFinite(Infinity));
        console.log(`Number.isFinite(-Infinity):`, Number.isFinite(-Infinity));
        console.log(`Number.isFinite(NaN):`, Number.isFinite(NaN));
        console.log(`Number.isFinite(123):`, Number.isFinite(123));
    }

    console.log(`
                     === Number Safety Checking ===
    `);

    {
        let isSafety1 = Number.isSafeInteger(42);
        let isSafety2 = Number.isSafeInteger(9007199254740992);
        console.log(`Number.isSafeInteger(42):`, isSafety1);
        console.log(`Number.isSafeInteger(9007199254740992):`, isSafety2);
    }

    console.log(`
                       === Number Comparison ===
    `);

    {
        let num_comp1 = (0.1 + 0.2 === 0.3);
        let num_comp2 = (Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON);
        console.log(`0.1 + 0.2 === 0.3:`, num_comp1);
        console.log(`Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON:`, num_comp2);
    }

    console.log(`
                       === Number Truncation ===
    `);

    {
        console.log(`Math.trunc(42.7):`, Math.trunc(42.7));
        console.log(`Math.trunc( 0.1):`, Math.trunc(0.1));
        console.log(`Math.trunc(-0.1):`, Math.trunc(-0.1));
    }

    console.log(`
                   === Number Sign Determination ===
    `);

    {
        console.log(`Math.sign(7):`, Math.sign(7));
        console.log(`Math.sign(0):`, Math.sign(0));
        console.log(`Math.sign(-0):`, Math.sign(-0));
        console.log(`Math.sign(-7):`, Math.sign(-7));
        console.log(`Math.sign(NaN):`, Math.sign(NaN));
    }

}
