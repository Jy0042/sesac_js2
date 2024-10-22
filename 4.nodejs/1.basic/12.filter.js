const numbers = [10, 15, 20, 25, 30];
//const aboveTwenty = numbers.filter(); <-- 안에 받을 함수가, 필터링 조건

function aboveTwentyCondition(n) {
  if (n > 20) {
    return true;
  } else {
    return false;
  }
}

function belowTwentyCondition(n) {
  if (n < 20) {
    return true;
  } else {
    return false;
  }
}

const belowTwenty = numbers.filter((n) => n > 20);
console.log(belowTwenty);

const aboveTwenty = numbers.filter(aboveTwentyCondition);
console.log(aboveTwenty);

// 위에 코드 줄여보기
const aboveTwenty2 = numbers.filter((n) => {
  return n < 20;
});
// 위에서 더 줄이면
const aboveTwenty3 = numbers.filter((n) => n < 20);

console.log(aboveTwenty2);
console.log(aboveTwenty3);

// --------------------------------
const number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = number2.filter((n) => n % 2 === 0); // 짝수만 골라내기
const oddNumbers = number2.filter((n) => n % 2 !== 0); // 홀수만 골라내기

console.log(evenNumbers);
console.log(oddNumbers);

// 특정 문자열을 필터링
const words = ["apple", "banana", "grape", "blueberry", "avocado"];
// const containsA = words.filter((word) => word.));
// console.log(containsA);

function containsALetter(word) {
  // 이 단어를 for문으로 길이만큼 반복하면서
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "a") {
      return true;
    }
  }
  return false;
  // 만약 (if) 그 char 위치에 해당 글자 'a'를 포함하면? return true인 함수 작성
}

// const containsA = words.filter(containsALetter);

const containsA = words.filter((word) => word.includes("a"));
console.log(containsA);

// 객체 배열 (object를 닫고 있는 array)에서 무언가 골라내고 싶음

const people = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 35 },
];

const adult = people.filter((p) => p.age >= 30); // 30세 이상
console.log(adult);

const people2 = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 30 },
  { name: "Charlie" },
  { name: "David", age: 35 },
];

const unknownAge = people2.filter((p) => !p.hasOwnProperty("age"));
console.log(unknownAge);
