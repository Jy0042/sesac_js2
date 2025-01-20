import readlineSyne from "readline-sync";

class GuessNumberGame {
  private targetNumber: number;
  private attempts: number;
  private maxAttempts: number;

  constructor(maxAttempts: number = 10) {
    this.targetNumber = Math.floor(Math.random() * 100) + 1;
    this.attempts = 0;
    this.maxAttempts = maxAttempts;
  }

  private getFeedback(guess: number): string {
    if (guess < this.targetNumber) return "Too Low!";
    if (guess > this.targetNumber) return "Too High!";
    return "Correct!";
  }

  private printMessage(message: string): void {
    console.log(message);
  }

  public play(): void {
    console.log("Welcome to Guess the Number Game!");
    console.log(
      `I'm thinking of a number between 1 and 100. You have ${this.maxAttempts} attempts.`
    );

    while (this.attempts < this.maxAttempts) {
      const input = parseInt(
        readlineSyne.question(`Attempt ${this.attempts + 1}: Your guess? `),
        10
      );

      this.attempts++;
      const feedback = this.getFeedback(input);

      if (feedback === "Correct!") {
        this.printMessage(`You got it! ${this.attempts}/${this.maxAttempts} attempts`);
        return;
      } else {
        console.log(`Wrong: ${feedback}`);
      }
    }
    this.printMessage(`Out of attempts! The number was ${this.targetNumber}`);
  }
}

const myGame = new GuessNumberGame();

myGame.play();
