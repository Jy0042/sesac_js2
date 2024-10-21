/* 
호이스팅(Hoisting)

js는 인터프리터언어로 라인바이라인으로 실행되는데
변수나 함수의 선언은 위로 끌어올려서 보는 현상 
*/

console.log(multiply(4, 2));

function multiply(x, y) {
  return x, y;
}

functionA();

function functionA() {
  functionB();
}

function functionB() {
  console.log("함수B");
}

// 변수에 함수를 담으면?
// console.log("곱셈:", multiply2(4, 2));

let multiply2 = function (x, y) {
  return x * y;
};
