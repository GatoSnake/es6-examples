"use strict";

{
    console.log("\n        ************** Extended literals examples **************\n\n                     === Binary & Ocal Literal ===\n                     ");

    console.log("Compare binary 0b111110111 === 503:", 503 === 503);
    console.log("Compare octal 0o767 === 503:", 503 === 503);

    console.log("\n                === Unicode String & RegExp Literal ===\n                ");

    console.log("Compare \"\uD842\uDFB7\".length === 2:", "𠮷".length === 2);
    console.log("Compare \"\uD842\uDFB7\".match(/./u)[0].length === 2:", "𠮷".match(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/)[0].length === 2);
    console.log("Compare \"\uD842\uDFB7\" === \"\\uD842\\uDFB7\":", "𠮷" === "\uD842\uDFB7");
    console.log("Compare \"\uD842\uDFB7\" === \"\\u{20BB7}\":", "𠮷" === "\uD842\uDFB7");
    console.log("Compare \"\uD842\uDFB7\".codePointAt(0) == 0x20BB7:", "𠮷".codePointAt(0) == 0x20BB7);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = "𠮷"[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var codepoint = _step.value;
            console.log("Value codepoint:", codepoint);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}