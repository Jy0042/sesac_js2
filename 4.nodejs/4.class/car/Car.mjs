class Car {
  constructor(brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
  }
  start() {
    console.log(`${this.brand} ${this.color} 색의 ${this.model} 차의 시동이 걸렸다`);
  }
  stop() {
    console.log(`${this.brand} ${this.color} 색의 ${this.model} 차의 시동 꺼짐`);
  }
}

export default Car;
