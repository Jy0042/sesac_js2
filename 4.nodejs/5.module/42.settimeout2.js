function asyncLongTask(callback) {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber >= 0.5) {
      callback(null, "작업 완료");
    } else {
      callback("작업 실패", null);
    }
  }, 2000);
}

function displayResult() {
  console.log("실행 완료");
}

asyncLongTask((error, result) => {
  if (error) {
    console.error("실패:", error);
    return;
  }
  console.log("성공:", result);
});
