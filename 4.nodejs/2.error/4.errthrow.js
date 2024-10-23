// 1. 문자열을 통한 에러 처리 방식 -> 비추천
function divide(a, b) {
  try {
    if (b === 0) {
      throw "0으로 나눌 수 없습니다";
    }
    return a / b;
  } catch (error) {
    return "오류 발생:" + error.message;
  }
}

// console.log(divide(5, 0));

// 2. 오류를 Error 객체에 담아서 반환(던지기)
function divide2(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("숫자만 입력하세요");
    }
    if (b === 0) {
      throw new Error("0으로 나눌 수 없습니다");
    }
    return a / b;
  } catch (error) {
    return "오류 발생: " + error.message;
  } finally {
    console.log("오류가 나건 안나건 무조건 호출됨");
  }
}
console.log(divide2(10, 2));
console.log(divide2(5, 7));
console.log(divide2(5, 0));
console.log(divide2(5, "7"));

console.log("이후에 정상적으러 동작 가능");
