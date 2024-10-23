import Car from "./Car.mjs";

class Suv extends Car {
  constructor(brand, model, color, road) {
    super(brand, model, color);
    this.road = road;
  }
  offRoad() {
    console.log(`${this.model} 이 ${this.road} 를 달린다`);
  }
}

export default Suv;
