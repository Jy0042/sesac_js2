import express from "express";
import nunjucks from "nunjucks";
import sqlite3 from "better-sqlite3";
import path from "path";

const app = express();
const PORT = 3000;
const db = new sqlite3("user-sample.db");

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

// 미들웨어
app.use(express.static("public"));

// 라우트
// 시스템 호출용 API
app.get("/api/users", (req, res) => {
  const query = "SELECT * FROM users";

  db.all(query, [], (err, rows) => {
    res.json(rows);
  });
});

app.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const query = "SELECT * FROM users WHERE Id = ?";

  db.get(query, [userId], (err, rows) => {
    if (rows) {
      res.json(rows);
    } else {
      res.json(404).send("해당 유저를 찾을 수 없음");
    }
  });
});

// 사용자 페이지용 라우트
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const query = db.prepare("SELECT * FROM users WHERE Id = ?");
  const data = query.get(userId);

  res.render("user_detail.html", { user: data });
});

app.get("/", (req, res) => {
  const query = db.prepare("SELECT * FROM users");
  const data = query.all();

  res.render("user.html", { data: data });
});

app.listen(PORT, () => {
  console.log("서버 레디");
});
