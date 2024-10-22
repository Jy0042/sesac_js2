// 1 부터 100까지 합산을 반납한다
function sum_to_100() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  return sum;
}

function sum2_to_100() {
  let num = 1;
  let sum = 0;
  while (num <= 100) {
    sum += num;
    num++;
  }
  return sum;
}

// 이 덧셈을 가장 빠르게 하는 알고리즘은?
function sum3_to_100() {
  let n = 100;
  let sum = (n * (n + 1)) / 2;
  return sum;
}

console.log(sum_to_100());
console.log(sum2_to_100());
console.log(sum3_to_100());

console.time("for");
console.log(sum_to_100());
console.timeEnd("for");

console.time("while");
console.log(sum2_to_100());
console.timeEnd("while");

console.time("gauss");
console.log(sum3_to_100());
console.timeEnd("gauss");
