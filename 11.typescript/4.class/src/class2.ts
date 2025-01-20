class Animal {
  constructor(public readonly name: string) {} // 위에 선언 안하고 this.name = name 안해도 됨

  makeSound() {
    console.log(`${this.name}: 동물소리. 멍멍/야옹`);
  }
}

class Dog extends Animal {
  constructor(name: string, public readonly breed: string) {
    super(name);
  }

  override makeSound() {
    console.log(`${this.name} : 멍멍`);
  }
}

const dog = new Dog("백구", "진돗개");
console.log(`이름: ${dog.name}, 품종: ${dog.breed}`);

dog.makeSound();
