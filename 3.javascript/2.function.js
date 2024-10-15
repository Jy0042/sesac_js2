function greet(name) {
  console.log("Hello, " + name);
}

greet("Tom");
greet("John");
greet("Jerry");
greet("Alice");

function add(a, b) {
  return a + b;
}

let sum = add(2, 3);
console.log(sum);
console.log(add(5, 10));

// 변수에 함수를 담는다
// 이름이 없는 함수 = 익명함수
let sum2 = function (a, b) {
  return a + b;
};

// 그럼?? 변수가 함수로서의 역할을 한다
console.log(sum2(11, 7));

/* 변수에 함수를 담는데, function 이라는 불필요한 키워드를 없애기 위해서
생겨난게 화살표 함수 */

// Arrow Function (화살표 함수)
let sum3 = (a, b) => {
  return a + b;
};

console.log(sum3(3, 4));

// 화살표함수에서 더 줄인것
let sum4 = (a, b) => a + b;
console.log(sum4(3, 7));
