// 과거 언어는 모든 예외 처리를 if else로 했음 - 개발자의 역량
// 모던 언어: JAVA 이후의 언어 (JS, Python, Golang 등등)
//
// try {

// } catch {

// }

// const undefinedVariable = 10;

try {
  const result = undefinedVariable * 2;
  console.log(result);
  console.log("여기는 다른 코드1");
} catch (error) {
  console.log("오류가 발생했음", error.message);
}

console.log("여기는 다른 코드2");
