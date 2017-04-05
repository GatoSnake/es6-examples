{
    console.log(`
      ************** Classes examples **************

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

    class Rectangle extends Shape {
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

    let rectangle = new Rectangle(2, 11, 21, 100, 200);
    console.log(`Rectangle size:`, JSON.stringify(rectangle.getSize()));

    let circle = new Circle(2, 80, 90, 50);
    console.log(`Circle pos:`, JSON.stringify(circle.getPos()));

    console.log(`
        === Class Inheritance, From Expressions ===
      `);

    {
        var aggregation = (baseClass, ...mixins) => {
            let base = class _Combined extends baseClass {
                constructor(...args) {
                    super(...args);
                    mixins.forEach((mixin) => {
                        mixin.prototype.initializer.call(this);
                    });
                }
            };
            let copyProps = (target, source) => {
                Object.getOwnPropertyNames(source)
                    .concat(Object.getOwnPropertySymbols(source))
                    .forEach((prop) => {
                        if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                            return
                        Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
                    })
            }
            mixins.forEach((mixin) => {
                copyProps(base.prototype, mixin.prototype);
                copyProps(base, mixin);
            });
            return base;
        };

        class Colored {
            initializer() {
                this._color = 'white';
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
        rect.color = 'red';
        console.log(`Rectangle data:
  pos x: ${rect.x}
  pos y: ${rect.y}
  pos z: ${rect.z}
  color: ${rect.color}`);
    }

    console.log(`
                === Base Class Access ===
      `);

    {
        class Shape {
            constructor(id, x, y) {
                this.id = id;
                this.x = x;
                this.y = y;
            }
            toString() {
                return `Shape(${this.id})`;
            }
        }
        class Rectangle extends Shape {
            constructor(id, x, y, width, height) {
                super(id, x, y);
            }
            toString() {
                return `Rectangle > ${super.toString()}`;
            }
        }
        class Circle extends Shape {
            constructor(id, x, y, radius) {
                super(id, x, y);
            }
            toString() {
                return `Circle > ${super.toString()}`;
            }
        }

        let shape = new Shape(1, 10, 20);
        console.log(shape.toString());
        let rectangle = new Rectangle(2, 20, 30);
        console.log(rectangle.toString());
        let circle = new Circle(3, 30, 40);
        console.log(circle.toString());
    }

    console.log(`
                  === Static Members ===
      `);

    {
        class Rectangle extends Shape {
            constructor(id, x, y, width, height) {
                super(id, x, y);
                this.width = width;
                this.height = height;
            }
            static defaultRectangle() {
                return new Rectangle('default', 2, 2, 100, 100);
            }
        }
        class Circle extends Shape {
            constructor(id, x, y, radius) {
                super(id, x, y);
                this.radius = radius;
            }
            static defaultCircle() {
                return new Circle('default', 4, 4, 100);
            }
        }

        let rectangle = Rectangle.defaultRectangle();
        console.log(`Rectangle data:`, JSON.stringify(rectangle));
        let circle = Circle.defaultCircle();
        console.log(`Circle data:`, JSON.stringify(circle));
    }

    console.log(`
                  === Getter/Setter ===
      `);

    {
        class Rectangle {
            constructor(width, height) {
                this._width = width;
                this._height = height;
            }
            set width(width) {
                this._width = width;
            }
            get width() {
                return this._width;
            }
            set height(height) {
                this._height = height;
            }
            get height() {
                return this._height;
            }
            get area() {
                return this._width * this._height;
            }
        };

        var r = new Rectangle(50, 20);
        console.log(`Compare rectangle.area === 1000:`, r.area === 1000);
    }

}
