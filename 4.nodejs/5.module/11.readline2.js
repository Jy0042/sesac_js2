const readline = require("readline");

// stdin = 0 - 사용자로부터 터미널 키보드로 입력
// stdout = 1 - 콘솔 정상 출력
// stderr = 2 - 콘솔 오류 출력

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("구구단의 단을 입력하시오: ", (input) => {
  const num = parseInt(input);
  if (isNaN(num) || num < 1 || num > 9) {
    console.log("올바른 입력값이 아닙니다");
    rl.close();
    return;
  }
  console.log(`${input} 단을 입력했습니다`);
  for (let i = 1; i <= 9; i++) {
    console.log(`${input} * ${i} = ${input * i}`);
  }
  rl.close();
});
