{
    console.log(`
      ************** Classes **************

            === Class Definition ===
                      `);

    class Shape {
        constructor(id, x, y) {
            this.id = id;
            this.move(x, y);
        }
        move(x, y) {
            this.x = x;
            this.y = y;
        }
        getPos() {
            return {
                x: this.x,
                y: this.y
            };
        }
    }

    let shape = new Shape(1, 10, 20);
    console.log(`Shape pos:`, JSON.stringify(shape.getPos()));
    shape.move(15, 35);
    console.log(`Shape pos:`, JSON.stringify(shape.getPos()));

    console.log(`
          === Class Inheritance ===
              `);

    class Rectangule extends Shape {
        constructor(id, x, y, width, height) {
            super(id, x, y);
            this.width = width;
            this.height = height;
        }
        getSize() {
            return {
                width: this.width,
                height: this.height
            };
        }
    }

    class Circle extends Shape {
        constructor(id, x, y, radius) {
            super(id, x, y);
            this.radius = radius;
        }
    }

    let rectangule = new Rectangule(2, 11, 21, 100, 200);
    console.log(`Rectangule size:`, JSON.stringify(rectangule.getSize()));

    let circle = new Circle(2, 80, 90, 50);
    console.log(`Circle pos:`, JSON.stringify(circle.getPos()));

}

var aggregation = require("aggregation/es6")

    console.log(`
   === Class Inheritance, From Expressions ===
              `);

    class Colored {
        initializer() {
            this._color = "white";
        }
        get color() {
            return this._color;
        }
        set color(v) {
            this._color = v;
        }
    }

    class ZCoord {
        initializer() {
            this._z = 0;
        }
        get z() {
            return this._z;
        }
        set z(v) {
            this._z = v;
        }
    }

    class Shape {
        constructor(x, y) {
            this._x = x;
            this._y = y;
        }
        get x() {
            return this._x;
        }
        set x(v) {
            this._x = v;
        }
        get y() {
            return this._y;
        }
        set y(v) {
            this._y = v;
        }
    }

    class Rectangle extends aggregation(Shape, Colored, ZCoord) {}

    var rect = new Rectangle(7, 42);
    rect.z = 1000;
    rect.color = "red";
    console.log(rect.x, rect.y, rect.z, rect.color);
