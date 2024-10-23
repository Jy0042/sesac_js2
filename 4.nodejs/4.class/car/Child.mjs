import Person from "./Person.mjs";

class Child extends Person {
  constructor(name, age, gender) {
    super(name, age, gender);
  }
  playInCar(car) {
    console.log(`${car.model} ${car.color} 탑승`);
  }
  sing(song) {
    console.log(`${this.name} 가 ${song} 을 부른다`);
  }
}
export default Child;
