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

export default Person;
