class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    return "동물소리";
  }
  walk() {
    return `${this.name}이 걷고 있습니다.`;
  }
}

class Dog extends Animal {
  makeSound() {
    return "멍멍";
  }
  walk() {
    return `${this.name}가 깡총깡총 걷고 있다`;
  }
}
const myDog = new Dog("멍멍이");
console.log(myDog.makeSound());
console.log(myDog.walk());
