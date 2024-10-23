class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  drive() {
    return `${this.make}의 ${this.model} 이 운항 중`;
  }
  open() {
    return `${this.model}의 문이 열렸습니다`;
  }
  close() {
    return `${this.model}의 문이 닫혔습니다`;
  }
}

// 클래스를 사용하려면??
const myCar = new Car("현대차", "k5");
const myCar2 = new Car("기아차", "모닝");
const status2 = myCar.drive();
const status3 = myCar2.drive();

console.log(status2);
console.log(status3);
console.log(myCar.open());
console.log(myCar.close());
