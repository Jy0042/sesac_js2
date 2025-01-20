// Person 에 대한 인터페이스 정의 (데이터 속성과 타입)
interface Person2 {
  name: string;
  age: number;
  isEmployed: boolean;
}

const alice: Person2 = {
  name: "alice",
  age: 30,
  isEmployed: true,
};

console.log(`Name: ${alice.name}, Age: ${alice.age}, Employed: ${alice.isEmployed}`);

interface Product {
  readonly id: number; // 필수,읽기 전용 속성
  name: string; // 필수 속성
  price?: number; // 선택적 속성
}

const laptop: Product = {
  id: 1,
  name: "MacBook Pro",
  // price 미정
};
console.log(`상품 ID: ${laptop.id}, 상품명: ${laptop.name}, price: ${laptop.price}`);

laptop.name = "MacBook Air";
laptop.price = 2000000;
console.log(`상품 ID: ${laptop.id}, 상품명: ${laptop.name}, price: ${laptop.price}`);
// laptop.id = 2;
