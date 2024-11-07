const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

app.set("view engine", "html");

nunjucks.configure("views", {
  autoescape: true, // 입력밧 처리할때 XSS 같은 것 발생하지 않도록 처리하는 기능
  express: app,
});

app.get("/", (req, res) => {
  // 기본값은 njk 임 그래서 index.njk 를 찾음
  res.render("index", { title: "익스프레스웹", message: "웰컴투 Nunjucks" });
  // res.render("index.html", { title: "익스프레스웹", message: "웰컴투 Nunjucks" });
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
  console.log("서버 레디");
});
