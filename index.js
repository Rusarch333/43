// abstract
class Figure {
  constructor(name) {
    this._name = name;
  }
  get Name() {
    return this._name;
  }
  getArea() {
    throw new Error("Abstract method!");
  }
  getPerimetr() {
    throw new Error("Abstract method!");
  }
}

class Triangular extends Figure {
  constructor(sideA, sideB, angleAB) {
    super("Traingular");
    this.sideA = sideA;
    this.sideB = sideB;
    this.angleAB = angleAB;
  }
  getArea() {
    return (
      (this.sideA * this.sideB * Math.sin(this.angleAB * (180 / Math.PI))) / 2
    );
  }
}

class Circle extends Figure {
  constructor(radius) {
    super("Circle");
    this._radius = radius;
  }
  get radius() {
    return this._radius;
  }
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

const triangular = new Triangular(3, 4, 45);
console.log(triangular.getArea());

const circle = new Circle(4);
console.log(circle.getArea());

const getAreaFigure = (figure) => {
  if (figure instanceof Figure) {
    return figure.getArea();
  }
  throw new TypeError("Not a figure!");
};

console.log(getAreaFigure(triangular));
console.log(getAreaFigure(circle));
