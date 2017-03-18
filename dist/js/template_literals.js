"use strict";

var _templateObject = _taggedTemplateLiteral(["http://example.com/foo?bar=", "&quux=", ""], ["http://example.com/foo?bar=", "&quux=", ""]),
    _templateObject2 = _taggedTemplateLiteral(["foo\n", "bar"], ["foo\\n", "bar"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

{
    var get = function get(array, param1, param2) {
        console.log(array, param1, param2);
        console.log("" + array[0] + param1 + array[1] + param2);
    };

    var quux = function quux(strings) {
        console.log("Condition strings[0] === \"foo\\n\":", strings[0] === "foo\n");
        console.log("Condition strings[1] === \"bar\":", strings[1] === "bar");
        console.log("Condition strings.raw[0] === \"foo\\\\n\":", strings.raw[0] === "foo\\n");
        console.log("Condition strings.raw[1] === \"bar\":", strings.raw[1] === "bar");
        console.log("Condition values[0] === 42:", (arguments.length <= 1 ? undefined : arguments[1]) === 42);
    };

    console.log("=========== Template literals examples ===========");

    var customer = {
        name: "Foo"
    };
    var card = {
        amount: 7,
        product: "Bar",
        unitprice: 42
    };
    var message = "Hello " + customer.name + ",\nwant to buy " + card.amount + " " + card.product + " for\na total of " + card.amount * card.unitprice + " bucks?";
    console.log(message);

    var bar = "Hola";
    var baz = "Mundo";
    var asd = "Cristhian";

    get(_templateObject, bar + baz, asd);

    quux(_templateObject2, 42);

    console.log("Condition String.war:", String.raw(_templateObject2, 42) === "foo\\n42bar");
}