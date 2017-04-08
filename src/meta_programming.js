{
    console.log(`
        ************** Meta-Programming examples **************

                           === Proxying ===
    `);

    {
        let target = {
            foo: 'Welcome, foo'
        };
        let proxy = new Proxy(target, {
            get(receiver, name) {
                return name in receiver ? receiver[name] : `Hello, ${name}`;
            }
        });
        console.log(`proxy.foo:`, proxy.foo);
        console.log(`proxy.world:`, proxy.world);
    }

    console.log(`
                         === Reflection ===
    `);

    {
        let obj = {
            a: 1
        };
        Object.defineProperty(obj, "b", {
            value: 2
        });
        obj[Symbol("c")] = 3;
        console.log(`Reflect.ownKeys(obj):`, Reflect.ownKeys(obj));

    }

}
