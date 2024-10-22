const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "orange"];
const mixed = [1, "hello", true, null, { key: "value" }];

console.log(numbers[0]); // 첫번째 인텍스는 0번
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);

fruits[1] = "BANANA";
console.log(fruits);

// 배열 순회 - 전통적인/고전적인 메모리의 주소값을 순회(iterate) 하는 방식
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// fruits.forEach(callback 함수);
function print_fruit(fruit) {
  console.log(fruit);
}

// 객체지향적으로 객체 중심으로 호출 됨, 콜백함수를 등록하는 형태
fruits.forEach(print_fruit);

// 익명함수로 간소화, 빌트인(콜백함수 위치에)
fruits.forEach(function (fruit) {
  console.log(fruit);
});

// 최근 개발자들이 많이 사용
fruits.forEach((fruit) => {
  console.log(fruit);
});

console.log("------------");
console.log(numbers);

const num_length = numbers.push(6); // 맨 뒤에 삽입
console.log(numbers);
console.log("배열의 길이는: ", num_length);
const removed_elem = numbers.pop(); // 맨 뒤에꺼 삭제
console.log(numbers);
console.log("삭제된 항목은: ", removed_elem);

const sliceArray = fruits.slice(1, 3); // 배열 내의 1부터 3전까지 즉 1과 2를 의미
console.log(sliceArray);
console.log(fruits);

const sliceNumbers = numbers.slice(2, 4); // 2 ~ 4보다 작은것 까지 2와 3의 인덱스 3,4
console.log(sliceNumbers);

// slice 는 원본을 건드리지 않음 복제본 생성
// splice 는 원본을 건드린다

console.log("------------");
const removeElements = numbers.splice(1, 2);
console.log(removeElements); // 잘라내고 나온 요소
console.log(numbers); // 잘려나가고 남은 나머지 요소, 원본 데이터가 변경 됨

// 배열 합치기
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const mergeArray = array1.concat(array2, array3); // 복제본
console.log(array1);
console.log(array2);
console.log(array3);
console.log(mergeArray);

const mergeArrayWithSpread = [...array1, ...array2];
console.log(mergeArrayWithSpread);

const originalArray = [1, 2, 3];
const elementsToInsert = [4, 5, 6];

// 1번 인덱스부터 0개를 삭제하라고 시키면서, 중간에 삽입
originalArray.splice(1, 0, ...elementsToInsert);
console.log(originalArray);
