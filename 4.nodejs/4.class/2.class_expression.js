const Car = class {
  // 실명, 호이스팅이 된지만 초기화는 안된다
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  drive() {
    return `${this.make}의 ${this.model} 이 운항 중`;
  }
  open() {
    return `${this.model} 의 문이 열렸습니다.`;
  }
  close() {
    return `${this.model} 의 문이 닫혔습니다.`;
  }
};

// 클래스를 사용하려면??
const myCar = new Car("현대차", "K5");
const myCar2 = new Car("기아차", "모닝");
const status2 = myCar.drive();
const status3 = myCar2.drive();

// 함수는 호이스팅이 된다
// 객체도 호이스팅이 된다

// 변수를 함수에 담으면? 호이스팅 xxx
// 변수에 클래스를 담으면? 호이스팅 xxx
