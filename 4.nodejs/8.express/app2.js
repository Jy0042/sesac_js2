import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("결과 출력");
});

app.get("/user", (req, res) => {
  res.send("사용자를 출력");
});

app.get("/users/:id", (req, res) => {
  console.log(req.params);
  res.send(`사용자 ${req.params.id}를 출력`);
});

app.get("/users/:id/profile", (req, res) => {
  console.log(req.params);
  res.send(`사용자 ${req.params.id} 에 대한 상세한 profile`);
});

app.get("/search", (req, res) => {
  const queryParams = req.query;
  console.log(queryParams);
  res.send(`검색 요청 내용 ${queryParams.q} 와 최근 ${queryParams.top} 갯수 입니다`);
});

app.listen(port, () => {
  console.log("서버 레디");
});
