import readline from "readline";

console.log("입력값 받기 전");

// rl.question("원하는 값을 입력하세요: ", (answer) => {
//   console.log(`입력한 값은: ${answer}`);
//   rl.console();
// });

function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      // console.log(`입력한 값은: ${answer}`);
      rl.close();
      resolve(answer);
    });
  });
}

async function askQuestions() {
  const answer1 = await askQuestion("원하는 값1을 입력하세요: ");
  console.log(`입력한 값은 : ${answer1}`);
  const answer2 = await askQuestion("원하는 값2을 입력하세요: ");
  console.log(`입력한 값은 : ${answer2}`);
}

askQuestions();
console.log("프로그램 끝");
