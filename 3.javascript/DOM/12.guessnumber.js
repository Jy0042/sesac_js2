// 미션 1
// 1. 랜덤 숫자 1~100 까지 생성
let randomNum = Math.floor(Math.random() * 100) + 1;

// 2. Guess 버튼을 통해 입력한 숫자와 내 숫자가 맞는지 비교
function resultText() {
  const inputNum = document.getElementById("inputNumber").value;
  const result = document.getElementById("result");
  const historyList = document.getElementById("historyList");
  const GuessButton = document.getElementById("GuessButton");

  if (inputNum < randomNum) {
    // console.log("랜덤: " + randomNum + ", 추측: " + inputNum);
    result.innerHTML = "Too Low";
  } else if (inputNum > randomNum) {
    // console.log("랜덤: " + randomNum + ", 추측: " + inputNum);
    result.innerHTML = "Too Hight";
  } else {
    // console.log("랜덤: " + randomNum + ", 추측: " + inputNum);
    result.innerHTML = "Correct";
  }

  // 3항 연산자
  // (조건문) ? true : false
  result.innerHTML =
    inputNum < randomNum ? "Too Low" : inputNum > randomNum ? "Too High" : "Correct";

  // 2-1. 입력한 숫자가 더 크면? Too High 라고 출력
  // 2-2. 입력한 숫자가 더 작으면? Too Low 라고 출력
  // 2-3. 같으면? Correct 라고 출력

  // 미션 2
  // 3. 입력한 값들의 로그를 출력
  const listItem = document.createElement("li");
  listItem.textContent = `예측숫자: ${inputNum}`;
  historyList.appendChild(listItem);
}
// 미션 3
// 4. 이걸 내가 풀어가는 사람 입장에서, 최소화해서 푸는 기법
// 이런 알고리즘을 우리가 뭐라고 부르는가?? - 바이너리 서치 방식
// 4-2. 최대(아무리 많이 찍더라도) 몇번만에 이 문제를 (무조건) 풀 수 있는가??
// 그 횟수는?? - 7번

GuessButton.addEventListener("click", resultText);
