type Feedback = "Too Low!" | "Too High!" | "Correct!";

const FEEDBACK_MESSAGE: Record<Feedback, string> = {
  "Too Low!": "숫자가 작아요",
  "Too High!": "숫자가 커요",
  "Correct!": "정답",
};

type statusType = "success" | "error" | "loading";
const statusMessage: Record<statusType, string> = {
  success: "성공",
  error: "에러",
  loading: "로딩중",
};

const userPermission: Record<number, string> = {
  1: "admin",
  2: "user",
  3: "guest",
};

function guessNumber(target: number, guess: number): Feedback {
  // function guessNumber(target: number, guess: number): string {
  if (guess < target) return "Too Low!";
  if (guess > target) return "Too High!";
  if (guess / 2 < target) return "Too Low!";
  return "Correct!";
}

const targetNumber: number = Math.floor(Math.random() * 100) + 1;
console.log(`Target Number:${targetNumber}`);

const userGuess = 50;
console.log(guessNumber(targetNumber, userGuess));

const feedback: Feedback = guessNumber(targetNumber, userGuess);
console.log(FEEDBACK_MESSAGE[feedback]);
