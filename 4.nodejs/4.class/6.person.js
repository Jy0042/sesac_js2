class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  greet() {
    // 함수(function) = 클래스의 함수를 Method라고 부른다
    console.log(`안녕, 나는 ${this.name}이고, ${this.age}살이다`);
  }
  walk() {
    console.log(`${this.name}이(가) 걷고 있다`);
  }
  eat() {
    console.log(`${this.name}이(가) 식사 중이다`);
  }
  work() {
    console.log(`${this.name}이(가) 업무 중 이다`);
  }
}

const person1 = new Person("철수", 25, "남성");
person1.greet();
person1.walk();
person1.eat();

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

const employee1 = new Employee("영희", 30, "여성", "매니저", 50000);
employee1.greet();
employee1.displayInfo();
employee1.walk();
employee1.eat();
employee1.work();

console.log("직원1이 직원객체인가?", employee1 instanceof Employee);
console.log("직원1이 사람인가?", employee1 instanceof Person);

console.log("사람1은 직원인가?", person1 instanceof Employee);
console.log("사람1은 사람인가?", person1 instanceof Person);

console.log("직원1 이라는 변수는?", typeof employee1);
console.log("사람1 이라는 변수는?", typeof person1);

class Manager extends Employee {
  constructor(name, age, gender, jopTitle, salary, team) {
    super(name, age, gender, jopTitle, salary);
    this.team = team;
  }
  assignTask() {
    console.log(`${this.name} 매니저가 ${this.team}에 업무를 배분하고 있다`);
  }
}
const manager1 = new Manager("제리", 34, "남성", "팀장", 6000, "개발");
manager1.assignTask();
