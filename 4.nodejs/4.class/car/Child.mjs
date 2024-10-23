import Person from "./Person.mjs";

class Child extends Person {
  constructor(name, age, gender, playIn, sing) {
    super(name, age, gender);
    this.playIn = playIn;
    this.sing = sing;
  }
  playInCar() {
    console.log(`${this.playIn} ${this.age} 살의 ${this.name} 탑승`);
  }
  sing() {
    console.log(`${this.name} 가 ${this.sing} 을 부른다`);
  }
}
export default Child;
