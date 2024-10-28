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

          const result = calculator(number1, operator, number2);
          console.log(`결과: ${result}`);
          this.readline.close();
        });
      });
    });
  }
}


selectCalculatorMode() {
  console.log('Select Calculator Mode:');
  console.log('1. 공학용 계산기');
  console.log('2. 표준 계산기');
  console.log('3. 프로그래머용 계산기');

  this.readline.question("모드 선택 (1/2/3): ",(mode) => {
    switch(mode) {
      case '1':
        this.calculator = new EngineeringCalculator();
        this.calculator.getOperators();
        this.operator = this.calculator.getOperators();
        break;
    case '2':
        this.calculator = new StandardCalculator();
        this.calculator.getOperators();
        this.operator = this.calculator.getOperators();
        break;
    case '3':
        this.calculator = new StandardCalculator();
        this.calculator.getOperators();
        this.operator = this.calculator.getOperators();
        break;
  }
  }
}


  class Calculator {
    constructor(num1, operator, num2) {
      this.num1 = num1;
      this.num2 = num2;
      this.operator = operator;
    }
    
  }