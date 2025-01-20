class Person {
  name: string;
  age: number;
  isEmployed: boolean;

  constructor(name: string, age: number, isEmployed: boolean) {
    this.name = name;
    this.age = age;
    this.isEmployed = isEmployed;
  }

  sayHello(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person = new Person("John", 30, true);
console.log(person.sayHello());
