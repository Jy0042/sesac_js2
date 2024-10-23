const Car = class {
  // 실명, 호이스팅이 된지만 초기화는 안된다
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  drive() {
    return `${this.make}의 ${this.model} 이 운항 중`;
  }
};

// 클래스를 사용하려면??
const myCar = new Car("현대차", "k5");
const status2 = myCar.drive();
console.log(status2);

// 함수는 호이스팅이 된다
// 객체도 호이스팅이 된다

// 변수를 함수에 담으면? 호이스팅 xxx
// 변수에 클래스를 담으면? 호이스팅 xxx
