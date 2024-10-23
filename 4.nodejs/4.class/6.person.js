class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  greet(name) {
    // 함수(function) = 클래스의 함수를 Method라고 부른다
    console.log(`안녕, ${name}. 나는 ${this.name}이고, ${this.age}살이다`);
  }
  // 이 함수의 호출자는 distance 의 예외처리를 해줘야함
  walk(distance) {
    if (distance) {
      // distance 의 truthy 인지 확인
      console.log(`${this.name}이(가) ${distance}미터를 걷고 있다`);
    } else {
      console.log(`${this.name}이(가) 멍하니 걷고 있다`);
    }
  }
  eat() {
    console.log(`${this.name}이(가) 식사 중이다`);
  }
  work() {
    console.log(`${this.name}이(가) 업무 중 이다`);
  }
}

const person1 = new Person("철수", 25, "남성");
person1.greet("길동");
person1.walk(5);
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
const employee2 = new Employee("영수", 31, "여성", 50000);
employee1.greet("나라");
employee2.greet();

employee1.displayInfo();
employee2.displayInfo();
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

class Customer extends Person {
  constructor(name, age, gender, customerId, orderHistory) {
    super(name, age, gender);
    this.customerId = customerId;
    this.orderHistory = orderHistory;
  }
  placeOrder(product) {
    console.log(`${this.name} 고객이 ${product}를 주문했음`);
    this.orderHistory.push(product);
  }
  printOrderHistory() {
    console.log(`${this.name}님의 주문내역은 ${this.orderHistory} 이다`);
    for (let i = 0; i < this.orderHistory.length; i++) {
      console.log(" - " + this.orderHistory[i]);
    }
    this.orderHistory.forEach((orderItem) => {
      console.log(`<li>${orderItem}</li>`);
    });
    console.log(`주문 내역: ${this.orderHistory.join("<br>")}`);
  }
}
const student1 = new Student("왕호", 20, "여성", "20241010", "컴퓨터공학");
student1.study();

const customer1 = new Customer("우제", 24, "남성", "C101", ["커피", "라떼"]);
customer1.placeOrder("생크림케이크");

customer1.printOrderHistory(); //이 사람이 지금까지 주문한 내역을 모두 출력

console.log("-".repeat(20));

const people = [manager1, student1, customer1, employee1, employee2];
introduce(people);

function introduce(people) {
  for (const person of people) {
    person.greet("상혁");
  }

  for (let i = 0; i < people.length; i++) {
    people[i].walk(Math.floor(Math.random() * 10 + 1));
  }

  people.forEach((person) => {
    if (person instanceof Employee) {
      person.work();
    } else if (person instanceof Student) {
      person.study();
    }
  });
}
