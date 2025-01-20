const quotes: string[] = [
  "고생 끝에 낙이 온다.",
  "하늘은 스스로 돕는 자를 돕는다.",
  "가는 말이 고와야 오는 말이 곱다.",
  "백지장도 맞들면 낫다.",
  "호랑이도 제 말 하면 온다.",
  "말 한마디로 천 냥 빚 갚는다.",
  "등잔 밑이 어둡다.",
  "티끌 모아 태산.",
  "우물 안 개구리.",
  "가는 날이 장날이다.",
];

export function getRandomQuote(): string {
  const randomIndex: number = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// console.log(getRandomQuote());
