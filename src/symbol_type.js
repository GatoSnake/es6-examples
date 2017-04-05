{
    console.log(`
        ************** Symbol Type examples **************

                       === Symbol Type ===
        `);

    console.log(`Symbol("foo"):`, Symbol('foo'));
    console.log(`Symbol("foo") !== Symbol("foo"):`, Symbol("foo") !== Symbol("foo"));

    const foo = Symbol();
    const bar = Symbol();
    console.log(`typeof foo === "symbol":`, typeof foo === 'symbol');
    console.log(`typeof bar === "symbol":`, typeof bar === 'symbol');

    let obj = {};
    obj[foo] = "foo";
    obj[bar] = "bar";
    console.log(`Value obj:`, JSON.stringify(obj));
    console.log(`Value Object.keys(obj):`, Object.keys(obj));
    console.log(`Value Object.getOwnPropertyNames(obj):`, Object.getOwnPropertyNames(obj));
    console.log(`Value Object.getOwnPropertySymbols(obj):`, Object.getOwnPropertySymbols(obj));
    console.log(`Value obj["foo"]:`, obj['foo']);
    console.log(`Value obj[foo]:`, obj[foo]);

    console.log(`
                     === Global Symbols ===
              `);

    {
        console.log(`Symbol.for("app.foo") === Symbol.for("app.foo"):`, Symbol.for("app.foo") === Symbol.for("app.foo"));

        const foo = Symbol.for("app.foo");
        const bar = Symbol.for("app.bar");
        console.log(`Symbol.keyFor(foo) === "app.foo":`, Symbol.keyFor(foo) === "app.foo");
        console.log(`Symbol.keyFor(bar) === "app.bar":`, Symbol.keyFor(bar) === "app.bar");
        console.log(`typeof foo === "symbol":`, typeof foo === "symbol");
        console.log(`typeof bar === "symbol":`, typeof bar === "symbol");

        let obj = {};
        obj[foo] = "foo";
        obj[bar] = "bar";
        console.log(`Value obj:`, JSON.stringify(obj));
        console.log(`Value Object.keys(obj):`, Object.keys(obj));
        console.log(`Value Object.getOwnPropertyNames(obj):`, Object.getOwnPropertyNames(obj));
        console.log(`Value Object.getOwnPropertySymbols(obj):`, Object.getOwnPropertySymbols(obj));
        console.log(`Value obj[foo]:`, obj[foo]);
    }

}
