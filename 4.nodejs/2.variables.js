// 1. 숫자형 변수
let a = 10;
// 부분소수점
let pi = 3.14;

let sum = a + pi;
console.log(sum);

// 상수 = 변경할 수 없음
const gravity = 9.81;
// gravity = 10;

console.log("오류난 이후");

// 불리언(boolean)
let isLogged = false;

if (isLogged) {
  console.log("사용자가 로그인 하셨습니다");
} else {
  console.log("로그인이 필요 합니다");
}

// 변수의 scope
var globalA = 10; // FE 에서 변수를 어디서나 쉽게 선언해서 쓸려고
let globalB = 20; // BE 에서의 글로벌 변수

function myFunction() {
  let localC = 30; //변수명만 글로벌이지, 실제로는 로컬 변수!
  console.log(`글로벌A: ${globalA}, 글로벌B: ${globalB}, 글로벌C: ${localC}`);
}

myFunction();
console.log(`글로벌A: ${globalA}, 글로벌B: ${globalB}`);
// console.log(`글로벌A: ${globalA}, 글로벌B: ${globalB}, 글로벌C: ${localC}`);
// localC는 존재하지 않음
