try {
  // 실제 여러가지 코드 내용
  invalidFunc();
} catch (error) {
  if (error instanceof TypeError) {
    console.log("타입 오류", error.message);
  } else if (error instanceof ReferenceError) {
    console.log("참조 오류", error.message);
  } else if (error instanceof RangeError) {
    console.log("범위 오류", error.message);
  } else {
    console.log("기타 오류", error.message);
  }
}

// 주의사항 에러처리를 잘 하는 방법
// 1. 에러처리를 안한다 XXX
// 2. 나의 코드를 통째로 ~~ try catch 한다 XXX
// 3. 너무 넓게 해도 문제 XXXX

// -> 기본룰은 꼭, 필요한 곳에 필요한 오류 처리를 한다
