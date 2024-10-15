// add(+), subtract(-), multiply(*), division(/)
// 4개의 함수를, 일반 함수로 짜보고 화살표 함수로 짜보기

// 일반 함수 4개
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

console.log(add(4, 3));
console.log(subtract(4, 3));
console.log(multiply(4, 3));
console.log(division(4, 3));

// 화살표 함수
let add2 = (a, b) => {
  return a + b;
};

let subtract2 = (a, b) => {
  return a - b;
};

let multiply2 = (a, b) => {
  return a * b;
};

let division2 = (a, b) => {
  return a / b;
};

console.log(add2(4, 3));
console.log(subtract2(4, 3));
console.log(multiply2(4, 3));
console.log(division2(4, 3));

// 더 줄인 화살표 ㄴ함수

let add3 = (a, b) => a + b;
let subtract3 = (a, b) => a - b;
let multiply3 = (a, b) => a * b;
let division3 = (a, b) => a / b;

console.log(add3(4, 3));
console.log(subtract3(4, 3));
console.log(multiply3(4, 3));
console.log(division3(4, 3));
