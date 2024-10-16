document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const resetButton = document.getElementById("resetButton");
  const progressBar = document.getElementById("progress");
  const timeInput = document.getElementById("timeInput");
  const progressText = document.getElementById("progressText");

  let interval; // 타이머 인터벌을 저장할 변수
  let duration; // 현재 진행 시점을 저장할 변수

  function startProgress() {
    console.log("시작");

    let timePassed = 0;
    duration = parseInt(timeInput.value);
    progressBar.style.width = 0; // 초기에 0으로 시작해서 매초마다 이걸 증가

    interval = setInterval(() => {
      timePassed++; // 경과된 시간을 저장

      let progress = (timePassed / duration) * 100; // 진행율 계산
      console.log(
        "timePassed: " + timePassed + ", duration: " + duration + ", progress: " + progress
      );
      progressBar.style.width = `${progress}%`;
      progressText.textContent = Math.floor(progress) + "%";

      if (timePassed >= duration) {
        // 지정된 시간이 초과
        clearInterval(interval); // 동작시켜둔 타이머를 중지
      }
    }, 1000); // 매 1초 마다 이 안에 함수를 반복하여 실행
  }
  function resetProgress() {
    console.log("리셋");
    progressBar.style.width = "0";
    timeInput.value = "";
    clearInterval(interval);
  }
  startButton.addEventListener("click", startProgress); // 시작 버튼 클릭 시 함수 호출
  resetButton.addEventListener("click", resetProgress);
});
