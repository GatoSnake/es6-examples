{
    console.log(`=========== Template literals examples ===========`);

    var customer = {
        name: "Foo"
    };
    var card = {
        amount: 7,
        product: "Bar",
        unitprice: 42
    };
    var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;
    console.log(message);

    function get(array, param1, param2) {
        console.log(array, param1, param2);
        console.log(`${array[0]}${param1}${array[1]}${param2}`);
    }

    let bar = `Hola`;
    let baz = `Mundo`;
    let asd = `Cristhian`;

    get `http://example.com/foo?bar=${bar + baz}&quux=${asd}`;

    function quux(strings, ...values) {
        console.log(`Condition strings[0] === "foo\\n":`, strings[0] === "foo\n");
        console.log(`Condition strings[1] === "bar":`, strings[1] === "bar");
        console.log(`Condition strings.raw[0] === "foo\\\\n":`, strings.raw[0] === "foo\\n");
        console.log(`Condition strings.raw[1] === "bar":`, strings.raw[1] === "bar");
        console.log(`Condition values[0] === 42:`, values[0] === 42);
    }
    quux `foo\n${ 42 }bar`;

    console.log(`Condition String.war:`, String.raw `foo\n${ 42 }bar` === "foo\\n42bar");
}
