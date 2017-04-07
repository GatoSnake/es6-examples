{
    console.log(`
        ************** Map/Set & WeakMap/WeakSet examples **************

                           === Set Data-Structure ===
    `);

    let s = new Set();
    s.add('hello').add('goodbye').add('hello');
    console.log(`s.size === 2:`, s.size === 2);
    console.log(`s.has("hello"):`, s.has('hello') === true);
    for (let key of s.values()) {
        console.log(`Data s:`, key);
    }

    console.log(`
                           === Map Data-Structure ===
    `);

    let m = new Map();
    m.set('hello', 42);
    m.set(s, 34);
    console.log(`m.get(s) === 34:`, m.get(s) === 34);
    console.log(`m.size === 2:`, m.size === 2);
    for (let [key, val] of m.entries()) {
        console.log(`key:`, key, ` - val:`, val);
    }

    console.log(`
                       === Weak-Link Data-Structures ===
    `);

    let isMarked = new WeakSet();
    let attachedData = new WeakMap();

    class Node {
        constructor(id) {
            this.id = id;
        }
        mark() {
            isMarked.add(this);
        }
        unmark() {
            isMarked.delete(this);
        }
        marked() {
            return isMarked.has(this);
        }
        set data(data) {
            attachedData.set(this, data);
        }
        get data() {
            return attachedData.get(this);
        }
    }

    let foo = new Node('foo');

    console.log(`Value foo:`, JSON.stringify(foo));
    foo.mark();
    foo.data = "bar";
    console.log(`foo.data === "data":`, foo.data === 'bar');
    console.log(`Value foo:`, JSON.stringify(foo));
    console.log(`foo isMarked:`,isMarked.has(foo));
    console.log(`attached data foo:`, attachedData.has(foo));
    foo = null /* remove only reference to foo */
    console.log(`attached data foo:`, attachedData.has(foo));
    console.log(`foo isMarked:`, isMarked.has(foo));

}
