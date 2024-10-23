import Person from "./Person.mjs";

class Student extends Person {
  constructor(name, age, gender, studentId, major) {
    super(name, age, gender);
    this.studentId = studentId;
    this.major = major;
  }
  study() {
    console.log(`${this.name} 학생은 ${this.age} 이고, ${this.major} 를 공부하고 있다`);
  }
}

export default Student;
