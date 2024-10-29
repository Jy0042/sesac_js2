// 사용자로부터 입력받는다 숫자와 부호와 입력 받아서 연산
import readline from "readline";

class UserInput {
  constructor(calculator) {
    this.calculator = calculator;
    this.readline = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  getUserInput() {
    this.readline.question("첫번째 숫자를 입력하시오: ", (num1) => {
      this.readline.question("연산자를 입력하시오 (+,-,*,/): ", (operator) => {
        this.readline.question("두번째 숫자를 입력하시오: ", (num2) => {
          const number1 = parseFloat(num1);
          const number2 = parseFloat(num2);

          if (isNaN(number1 || number2)) {
            console.log("숫자만 입력하세요");
            this.readline.close();
            return;
          }

          const result = this.calculator.calculate(number1, operator, number2);
          console.log(`결과: ${result}`);
          this.readline.close();
        });
      });
    });
  }
}

class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }

  sub(num1, num2) {
    return num1 - num2;
  }

  mul(num1, num2) {
    return num1 * num2;
  }

  div(num1, num2) {
    return num2 !== 0 ? num1 / num2 : "Error: 0으로 나눌 수 없음";
  }

  calculate(num1, operator, num2) {
    switch (operator) {
      case "+":
        return this.add(num1, num2);
      case "-":
        return this.sub(num1, num2);
      case "*":
        return this.mul(num1, num2);
      case "/":
        return this.div(num1, num2);
      default:
        return "Invalid operator";
    }
  }
}
const calculator = new Calculator();
const userInput = new UserInput(calculator);

userInput.getUserInput();
