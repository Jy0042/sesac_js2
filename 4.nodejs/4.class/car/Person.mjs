class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greet() {
    console.log(`안녕 ${this.name}`);
  }
  getInCar(car) {
    console.log(`${car.brand} ${car.model} ${car.color} 에 탑승`);
  }
}

export default Person;
