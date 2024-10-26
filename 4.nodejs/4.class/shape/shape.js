class Shape {
  constructor(type) {
    this.type = type;
  }
  getArea() {
    throw new Error("getArea() 구현 해라 안하면 오류");
  }
  toString() {
    return `${this.type} - 넓이: ${this.getArea().toFixed(2)} m2`;
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super("Square");
    this.length = sideLength;
  }
  getArea() {
    return this.length ** 2; // ** 은 제곱 - this.length * this.length
  }
  getInfo() {
    return `Square with side length ${this.length}`;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super("Triangle");
    this.base = base;
    this.height = height;
  }
  getArea() {
    return this.base * this.height * 0.5;
  }
  getInfo() {
    return `Triangle with base ${this.base} height ${this.height}`;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
  getInfo() {
    return `Circle with radius ${this.radius}`;
  }
}

class Trapezium extends Shape {
  constructor(base1, base2, height) {
    super("Trapezium");
    this.base1 = base1;
    this.base2 = base2;
    this.height = height;
  }
  getArea() {
    return (this.base1 + this.base2) * this.height * 0.5;
  }
  getInfo() {
    return `Trapezium with base ${this.base1}, ${this.base2} and height ${this.height}`;
  }
}

// 사용 예시
const square = new Square(5);
const triangle = new Triangle(4, 3);
const circle = new Circle(3);
const trapezium = new Trapezium(4, 6, 5);

// console.log(square.getInfo(), "Area:", square.getArea()); // 출력: 25
// console.log(triangle.getInfo(), "Triangle Area:", triangle.getArea()); // 출력: 6
// console.log(circle.getInfo(), "Circle Area:", circle.getArea()); // 출력: 28.27
// console.log(trapezium.getInfo(), "Trapezium Area:", trapezium.getArea()); // 출력: 25

// 1. 공통함수 어디에 넣을것인가?
// 2. 개별 모양마다 필수로 가져야하는 요소는?
//  constructor 안에 포함 되어서 this.xxxx속성으로 저장이 되어야함 (객체 안에)

console.log(`${square}`);
console.log(`${triangle}`);
console.log(`${trapezium}`);
console.log(`${circle}`);
