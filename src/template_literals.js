{
    console.log(`
      ************** Template literals examples **************

                    === String Interpolation ===
                    `);

    let customer = {
        name: "Foo"
    };
    let card = {
        amount: 7,
        product: "Bar",
        unitprice: 42
    };
    let message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;
    console.log(`Value message:`, message);

    console.log(`
                    === Custom Interpolation ===
              `);

    function get(array, param1, param2) {
        console.log(`Value params get():`, JSON.stringify(array), param1, param2);
        let url = `${array[0]}${param1}${array[1]}${param2}`;
        console.log(`Value url:`, url);
    }

    let bar = `Hola`;
    let baz = `Mundo`;
    let asd = `Cristhian`;

    get `http://example.com/foo?bar=${bar + baz}&quux=${asd}`;

    console.log(`
                     === Raw String Access ===
              `);

    function quux(strings, ...values) {
        console.log(`Compare strings[0] === "foo\\n":`, strings[0] === "foo\n");
        console.log(`Compare strings[1] === "bar":`, strings[1] === "bar");
        console.log(`Compare values[0] === 42:`, values[0] === 42);
        console.log(`Compare strings.raw[0] === "foo\\\\n":`, strings.raw[0] === "foo\\n");
        console.log(`Compare strings.raw[1] === "bar":`, strings.raw[1] === "bar");
    }
    quux `foo\n${ 42 }bar`;

    console.log(`Compare String.war:`, String.raw `foo\n${ 42 }bar` === "foo\\n42bar");
}
