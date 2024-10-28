console.log("1. 타이머를 통한 비동기 처리");

setTimeout(() => {
  console.log("2. 첫번째 작업: 2초후 실행");
}, 2000);

setTimeout(() => {
  console.log("3. 두번째 작업: 1초후 실행");
}, 1000);

console.log("4. 모든 작업 완료");
