import Car from "./Car.mjs";

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greet() {
    console.log(`안녕 ${this.name}`);
  }
  getInCar() {
    console.log(`${this.brand} ${this.model} ${this.color} 차가 운행 중`);
  }
}

export default Person;
