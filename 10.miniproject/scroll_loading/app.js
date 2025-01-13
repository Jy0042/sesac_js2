const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3000;

// 가상 데이터 생성
const data = Array.from({ length: 200 }, (_, i) => `Item ${i + 1}`);
const maxItems = 2000;

function getRandomIncrement() {
  return Math.floor(Math.random() * 21);
}

// 10초마다 랜덤으로 0~20 까지 숫자를 만들어 증가시키기
const intervalId = setInterval(() => {
  if (data.length < maxItems) {
    const randomIncrement = getRandomIncrement();
    const currentLength = data.length;
    for (let i = 0; i < randomIncrement; i++) {
      if (data.length < maxItems) {
        data.push(`Item ${currentLength + i + 1}`);
      }
    }
    console.log(`10초경과: 데이터가 ${randomIncrement}개 추가되어 총 ${data.length} 개가 되엇음`);
  } else {
    clearInterval(intervalId);
    console.log(`최대 개수 ${maxItems}에 도달하여 더이상 생성하지 않음`);
  }
}, 10_000);

// 미들웨어 설정
app.use(morgan("dev"));
app.use(express.static("public"));

// 데이터 반환 API
app.get("/api/data", (req, res) => {
  const { start, end } = req.query;
  const items = data.slice(parseInt(start), parseInt(end));
  res.json(items);
});

app.listen(port, () => {
  console.log("서버가 실행되었습니다: http://localhost:3000");
});
