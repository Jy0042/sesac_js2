import Person from "./Person.mjs";

class Parents extends Person {
  constructor(name, age, gender, drive) {
    super(name, age, gender);
    this.drive = drive;
  }
  driveCar() {
    console.log(`${this.driveCar} ddd`);
  }
}
export default Parents;
