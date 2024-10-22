// 입력값을 인자로 받아서 처리한다
// 함수명을 sum_to_n() 으로 바꾸고, 입력인자를 입력 받아서, 함수내에서는
// 그 인자로 처리하게 코드를 변경한다.

// 1 부터 100까지 합산을 반납한다
function sum_to_n(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}

function sum2_to_n(number) {
  let num = 1;
  let sum = 0;
  while (num <= number) {
    sum += num;
    num++;
  }
  return sum;
}

// 이 덧셈을 가장 빠르게 하는 알고리즘은?
function sum3_to_n(number) {
  let n = number;
  let sum = (n * (n + 1)) / 2;
  return sum;
}

const sumto = 1_000_000;

console.log(sum_to_n(sumto));
console.log(sum2_to_n(sumto));
console.log(sum3_to_n(sumto));

console.log("------ 성능 테스트 ------");
console.time("for");
console.log(sum_to_n(sumto));
console.timeEnd("for");

console.time("while");
console.log(sum2_to_n(sumto));
console.timeEnd("while");

console.time("gauss");
console.log(sum3_to_n(sumto));
console.timeEnd("gauss");
