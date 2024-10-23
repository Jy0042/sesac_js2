import Car from "./Car.mjs";

class Sedan extends Car {
  constructor(brand, model, color, trunk) {
    super(brand, model, color);
    this.trunk = trunk;
  }
  openTrunk() {
    console.log(`${this.model} 의 ${this.trunk} 가 열렸다`);
  }
}

export default Sedan;
