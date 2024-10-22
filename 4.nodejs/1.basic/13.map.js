// filter는 말 그대로 검색하는 함수
// map 은 배열의 멤버에게 공통적으로 원하는 함수 내용을 적용할 때 쓰는 함수

const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(콜백함수); // 각각의 개별 멤버에게, 이 함수가 적용

function double(n) {
  return n * 2;
}

const doubled = numbers.map(double);
console.log(doubled);

// 위를 줄이면
const double2 = numbers.map((n) => n * 2);
console.log(double2);

const squared = numbers.map((n) => n ** 2);
console.log(squared);

// 객체
const people = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 35 },
];

// 맵을 통해서 사람들의 이름만 가져오기
const names = people.map((p) => p.name);
console.log(names);

const ages = people.map((p) => p.age);
console.log(ages);

// 퀴즈 1.
const fruits = ["apple", "banana", "grape"];
const htmlTags = fruits.map((f) => (f.valueOf = `<li>${f}</li>`)); // 좌우 <li> 태그로 감싸기
const htmlTags2 = fruits.map((f) => `<li>${f}</li>`); // 좌우 <li> 태그로 감싸기
console.log(htmlTags);

// 퀴즈 2.
const apiData = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "Jane", lastName: "Smith" },
];

const fullName = apiData.map((a) => a.firstName + " " + a.lastName);
console.log(fullName);
