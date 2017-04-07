{
    console.log(`
        ************** Generators examples **************

          === Generator Function, Iterator Protocol ===
        `);

    {
        let fibonacci = {
            *[Symbol.iterator]() {
                let pre = 0,
                    cur = 1;
                for (;;) {
                    [pre, cur] = [cur, pre + cur];
                    yield cur;
                }
            }
        }

        for (let n of fibonacci) {
            if (n > 1000)
                break;
            console.log(`Current value fibonacci:`, n);
        }
    }

    console.log(`
             === Generator Function, Direct Use ===
    `);

    {
        function* range(start, end, step) {
            while (start < end) {
                yield start;
                start += step;
            }
        }

        for (let i of range(0, 10, 2)) {
            console.log(`Current value range:`, i);
        }
    }

    console.log(`
                  === Generator Matching ===
    `);

    {
        let fibonacci = function*(numbers) {
            let pre = 0,
                cur = 1;
            while (numbers-- > 0) {
                [pre, cur] = [cur, pre + cur];
                yield cur;
            }
        };

        for (let n of fibonacci(10)) {
            console.log(`Current value fibonacci:`, n);
        }

        let numbers = [...fibonacci(10)];
        console.log(`Value numbers:`, JSON.stringify(numbers));
        let [n1, n2, n3, ...others] = fibonacci(10);
        console.log(`Values n1, n2, n3, others:`, n1, n2, n3, others);
    }

    console.log(`
                === Generator Control-Flow ===
    `);

    {
        //  generic asynchronous control-flow driver
        function async(proc, ...params) {
            var iterator = proc(...params);
            return new Promise((resolve, reject) => {
                let loop = (value) => {
                    let result;
                    try {
                        result = iterator.next(value);
                    } catch (err) {
                        reject(err);
                    }
                    if (result.done)
                        resolve(result.value);
                    else if (typeof result.value === 'object' &&
                        typeof result.value.then === 'function')
                        result.value.then((value) => {
                            loop(value);
                        }, (err) => {
                            reject(err);
                        });
                    else
                        loop(result.value);
                }
                loop();
            });
        }

        //  application-specific asynchronous builder
        function makeAsync(text, after) {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(text), after);
            });
        }

        //  application-specific asynchronous procedure
        async(function*(greeting) {
            let foo = yield makeAsync('foo', 300)
            let bar = yield makeAsync('bar', 600)
            let baz = yield makeAsync('baz', 100)
            return `${greeting} ${foo} ${bar} ${baz}`
        }, 'Hello').then((msg) => {
            console.log(`Result example Generator Control-Flow:`, msg);
        })
    }

    console.log(`
                   === Generator Method ===
    `);

    {
        class Clz {
            * bar() {
                console.log('Hello bar');
            }
        };
        let Obj = {
            * foo() {
                console.log('Hello foo');
                yield;
                console.log('Bye foo');
            }
        };

        let obj = Obj.foo();
        console.log(obj.next());
        console.log(obj.next());
    }

}
