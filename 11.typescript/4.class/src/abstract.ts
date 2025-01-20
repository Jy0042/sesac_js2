abstract class Shape {
  abstract getArea(): number; // 이것을 상속받은 클래스가 필수로 구현해야함

  printArea() {
    console.log(`넓이: ${this.getArea()}`);
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  // 추상 메서드를 필수로 구현
  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}

const circle = new Circle(10);
circle.printArea();
circle.radius = 20;
circle.printArea();

class Square extends Shape {
  constructor(private length: number) {
    super();
  }

  getArea(): number {
    return this.length * this.length;
  }
}

const square = new Square(10);
square.printArea();
