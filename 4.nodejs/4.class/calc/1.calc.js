// 사용자로부터 입력받는다 숫자와 부호와 입력 받아서 연산
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function add(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function mul(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}

const calculator = (num1, operator, num2) => {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return sub(num1, num2);
    case "*":
      return mul(num1, num2);
    case "/":
      return div(num1, num2);
    default:
      return "Invalid operator";
  }
};

function getUserInput() {
  rl.question("첫번째 숫자를 입력하시오: ", (num1) => {
    rl.question("연산자를 입력하시오 (+,-,*,/): ", (operator) => {
      rl.question("두번째 숫자를 입력하시오: ", (num2) => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if (isNaN(number1 || number2)) {
          console.log("숫자만 입력하세요");
          rl.close();
          return;
        }

        const result = calculator(number1, operator, number2);
        console.log(`결과: ${result}`);
        rl.close();
      });
    });
  });
}

getUserInput();
