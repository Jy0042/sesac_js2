const { count } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const resultNumber = Math.floor(Math.random() * 100) + 1;

// console.log(resultNumber);

function guessGame(countInput = 0) {
  rl.question("1 ~ 100 사이의 숫자를 맞춰보세요 : ", (input) => {
    const inputNum = parseInt(input);

    if (isNaN(inputNum)) {
      console.log("\n숫자만 입력해주세요\n");
    } else if (inputNum > resultNumber) {
      console.log("\nDown\n");
      countInput++;
    } else if (inputNum < resultNumber) {
      console.log("\nUp\n");
      countInput++;
    } else {
      countInput++;
      console.log(`\n## 정답 ##\n${countInput} 번만에 성공`);
      return process.exit();
    }

    return guessGame(countInput);
  });
}

guessGame();
