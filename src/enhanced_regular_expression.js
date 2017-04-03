{
    console.log(`
    ************** Enhanced Regular Expression examples **************

               === Regular Expression Sticky Matching ===
                 `);

    //example one

    let message = "My name is Foo and my lastname is Bar."
    let pattern = /my [a-zA-Z]+/y;

    console.log(`Return pattern /my [a-zA-Z]+/y:`, JSON.stringify(pattern.exec(message)));
    console.log(`Last index pattern:`, pattern.lastIndex);

    pattern.lastIndex = 19;

    console.log(`Return pattern /my [a-zA-Z]+/y:`, JSON.stringify(pattern.exec(message)));
    console.log(`Last index pattern:`, pattern.lastIndex);

    console.log(`Return pattern /my [a-zA-Z]+/y:`, JSON.stringify(pattern.exec(message)));
    console.log(`Last index pattern:`, pattern.lastIndex);

    //example two
    let parser = (input, match) => {
        for (let pos = 0, lastPos = input.length; pos < lastPos; pos++) {
            for (let i = 0; i < match.length; i++) {
                match[i].pattern.lastIndex = pos;
                let found;
                if ((found = match[i].pattern.exec(input)) !== null) {
                    match[i].action(found);
                    pos = match[i].pattern.lastIndex;
                    break;
                }
            }
        }
    }

    let report = (match) => {
        console.log(`Function report:`, JSON.stringify(match));
    };

    parser("Foo 1 Bar 7 Baz 42", [{
            pattern: /Foo\s+(\d+)/y,
            action: (match) => report(match)
        },
        {
            pattern: /Bar\s+(\d+)/y,
            action: (match) => report(match)
        },
        {
            pattern: /Baz\s+(\d+)/y,
            action: (match) => report(match)
        },
        {
            pattern: /\s*/y,
            action: (match) => {}
        }
    ]);
}
