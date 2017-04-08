{
    console.log(`
        ************** Promises examples **************

                     === Promise Usage ===
    `);

    {
        function msgAfterTimeout(msg, who, timeout) {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout);
            });
        }

        msgAfterTimeout('', 'Foo', 100).then((msg) =>
            msgAfterTimeout(msg, 'Bar', 200)
        ).then((msg) => {
            console.log(`Response promise after 300ms:`, msg);
        });
    }

    console.log(`
                  === Promise Combination ===
    `);

    {
        let fetchPromised = (name, timeout) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(`Hi ${name}`), timeout);
            });
        }

        Promise.all([
            fetchPromised('Foo', 1000),
            fetchPromised('Bar', 500),
            fetchPromised('Baz', 200)
        ]).then((data) => {
            let [foo, bar, baz] = data;
            console.log(`Response all promises: foo=${foo} bar=${bar} baz=${baz}`);
        }, (err) => {
            console.log(`Error: ${err}`);
        });
    }

}
