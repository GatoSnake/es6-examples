{
    console.log(`
      ************** Extended literals examples **************

                   === Binary & Octal Literal ===
                   `);

    console.log(`Compare binary 0b111110111 === 503:`, 0b111110111 === 503);
    console.log(`Compare octal 0o767 === 503:`, 0o767 === 503);

    console.log(`
              === Unicode String & RegExp Literal ===
              `);

    console.log(`Compare "𠮷".length === 2:`, "𠮷".length === 2);
    console.log(`Compare "𠮷".match(/./u)[0].length === 2:`, "𠮷".match(/./u)[0].length === 2);
    console.log(`Compare "𠮷" === "\\uD842\\uDFB7":`, "𠮷" === "\uD842\uDFB7");
    console.log(`Compare "𠮷" === "\\u{20BB7}":`, "𠮷" === "\u{20BB7}");
    console.log(`Compare "𠮷".codePointAt(0) == 0x20BB7:`, "𠮷".codePointAt(0) == 0x20BB7);
    for (let codepoint of "𠮷") console.log(`Value codepoint:`, codepoint);
}
