import Person from "./Person.mjs";

class Employee extends Person {
  constructor(name, age, gender, jopTitle, salary) {
    super(name, age, gender);
    this.jopTitle = jopTitle;
    this.salary = salary;
  }
  displayInfo() {
    console.log(`직원 ${this.name} 의 직위는 ${this.jopTitle} 이며, 급여는 ${this.salary}원 이다`);
  }
  work() {
    console.log(`${this.name}이(가) 업무 중`);
  }
}

export default Employee;
