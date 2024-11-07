// 외부 모듈 import
const express = require("express");
const path = require("path");

// 변수 설정
// 서버 설정
const app = express();
const PORT = 3000;
const users = {};

// 미들웨어
app.use("/static", express.static("static"));
app.use("/image", express.static("static/image"));

// 요청의 바디에 application/json 이 있으면 ? req.body에 담아줘
app.use(express.json());

app.use((req, _, next) => {
  console.log(`LOG ${req.method} ${req.url}`);
  next();
});

// 라우트
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "static", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "static", "about.html"));
});

app.get("/user", (req, res) => {
  res.json(users);
});

app.post("/user", (req, res) => {
  console.log(req.body);
  // const name = req.body.name; // 아래랑 같은 거 아래가 줄인거
  const { name } = req.body;
  users[name] = name;

  res.status(200).send("등록성공"); // 201은 Created
});

// id 받아오는것
app.put("/user/:id", (req, res) => {
  const id = req.params.id;
  users[id] = req.body.name;
  res.status(204).send();
});

// id 받아오는것
app.delete("/user/:id", (req, res) => {
  const id = req.params.id;
  delete users[id];
  res.status(204).send();
});

// 오류 미들웨어
app.use((req, res) => {
  // res.status(404).send(`이 페이지 (${req.url}) 는 없습니다`);
  const errorPage = path.join(__dirname, "static", "404.html");
  res.status(404).sendFile(errorPage);
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 ${PORT} 포트에서 대기 중`);
});
