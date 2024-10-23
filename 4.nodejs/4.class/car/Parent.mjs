import Person from "./Person.mjs";

class Parents extends Person {
  constructor(name, age, gender, drive) {
    super(name, age, gender);
    this.drive = drive;
  }
  driveCar(car) {
    console.log(`${car.model} 이건 드라이브 카`);
  }
}
export default Parents;
