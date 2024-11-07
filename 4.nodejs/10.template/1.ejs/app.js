const express = require("express");
const ejs = require("ejs");
const app = express();
const PORT = 3000;

// 익스프레스의 뷰엔진으로 ejs를 쓸거다
app.set("view engine", "ejs");

//<%= 변수명 %>
//<%# 주석 %>
//<% 로직 %>

app.get("/", (req, res) => {
  res.render("index", { title: "익스프레스웹", message: "웰컴투 EJS" });
});

app.get("/fruits", (req, res) => {
  const fruits = ["Apple", "Banana", "Graphs", "Orange"];
  res.render("fruits", { fruits: fruits });
});

app.get("/greeting", (req, res) => {
  const username = "Tom"; // 실제로 이건 DB에서 가져옴
  res.render("greeting", { username });
});

app.get("/welcome", (req, res) => {
  const isAdmin = true; //나중에는 실제 새
  res.render("welcome", { isAdmin });
});

app.listen(3000, () => {
  console.log("서버 준비");
});
