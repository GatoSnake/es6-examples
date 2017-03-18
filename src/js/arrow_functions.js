{
    console.log(`
        ************** Arrow functions examples **************

                      === Expression Bodies ===
        `);

    var evens = new Array(1, 2, 3);

    var odds = evens.map(v => v + 1);
    var pairs = evens.map(v => ({
        even: v,
        odd: v + 1
    }));
    var nums = evens.map((v, i) => v + i);

    console.log(`Array odds:`, odds);
    console.log(`Array pairs:`, pairs);
    console.log(`Array nums:`, nums);

    console.log(`
                      === Statement Bodies ===
                `);

    var nums = new Array(2, 5, 3, 6, 8, 4, 5, 1, 5);
    var fives = new Array();

    nums.forEach(v => {
        if (v % 5 === 0)
            fives.push(v);
    });

    console.log(`Array fives:`, fives);

    console.log(`
                        === Lexical this ===
                `);

    let example = {
        nums: [2, 5, 3, 6, 8, 4, 5, 1, 5],
        fives: [],
        getFives: function() {
            this.nums.forEach((v) => {
                if (v % 5 === 0)
                    this.fives.push(v);
            });
        }
    }

    example.getFives();

    console.log(`Array example.nums:`, example.fives);

}
