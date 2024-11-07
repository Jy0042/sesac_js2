import express from "express";
const app = express();
const port = 3000;

// 미들웨너는 3개의 인자를 받는다. req, res, 나의 다음 포인트
function myLogger(req, res, next) {
  console.log(`LOG: ${req.method}, ${req.url}`);
  next();
}

function mySecurity(req, res, next) {
  console.log("나의 2번째 함수");
  console.log(`요청 시간: ${req.requestTime}`);
  req.requestTime = Date.now();
  console.log(`요청 시간: ${req.requestTime}`);

  next();
}
function mySAuth(req, res, next) {
  console.log("나의 3번째 함수");

  next();
}

app.use(myLogger);
app.use(mySecurity);
app.use(mySAuth);
app.use((req, res, next) => {
  console.log("나의 4번째 함수");
  next();
});

app.get("/", (req, res) => {
  // console.log(`요청 시간: ${req.requestTime}`);
  const timeString = new Date(req.requestTime).toString();

  res.send(`헬로우를 요청한 시간은 ${timeString}`);
});

app.listen(port, () => {
  console.log("서버 레디");
});
