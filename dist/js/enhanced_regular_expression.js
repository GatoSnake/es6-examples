"use strict";

{
    console.log("\n      ************** Enhanced Regular Expression examples **************\n\n                 === Regular Expression Sticky Matching ===\n                   ");

    var message = "My name is Foo and my lastname is Bar.";

    var pattern = new RegExp("my [a-zA-Z]+", "y");

    console.log("Return pattern /my [a-zA-Z]+/y:", pattern.exec(message));
    console.log("Last index pattern:", pattern.lastIndex);

    pattern.lastIndex = 19;

    console.log("Return pattern /my [a-zA-Z]+/y with lastIndex 19:", pattern.exec(message));
    console.log("Last index pattern:", pattern.lastIndex);

    console.log("Return pattern /my [a-zA-Z]+/y:", pattern.exec(message));
    console.log("Last index pattern:", pattern.lastIndex);

    var parser = function parser(input, match) {
        for (var pos = 0, lastPos = input.length; pos < lastPos; pos++) {
            for (var i = 0; i < match.length; i++) {
                match[i].pattern.lastIndex = pos;
                var found = void 0;
                if ((found = match[i].pattern.exec(input)) !== null) {
                    match[i].action(found);
                    pos = match[i].pattern.lastIndex;
                    break;
                }
            }
        }
    };

    var report = function report(match) {
        console.log("Function report:", match);
    };

    parser("Foo 1 Bar 7 Baz 42", [{
        pattern: new RegExp("Foo\\s+(\\d+)", "y"),
        action: function action(match) {
            return report(match);
        }
    }, {
        pattern: new RegExp("Bar\\s+(\\d+)", "y"),
        action: function action(match) {
            return report(match);
        }
    }, {
        pattern: new RegExp("Baz\\s+(\\d+)", "y"),
        action: function action(match) {
            return report(match);
        }
    }, {
        pattern: new RegExp("\\s*", "y"),
        action: function action(match) {}
    }]);
}