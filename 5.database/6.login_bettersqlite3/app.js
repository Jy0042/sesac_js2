import express from "express";
import sqlite3 from "better-sqlite3";
import path from "path";

const app = express();
const port = 3000;

const db = new sqlite3("users.db");

// db.serialize(() => {
//   db.run(
//     "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)"
//   );
// });

app.use(express.urlencoded({ extended: true }));

// 라우팅
app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  const queryStr = `SELECT * FROM users WHERE username = ? AND password = ?`;
  const row = db.prepare(queryStr, [username, password]).get(username, password);
  console.log(queryStr);

  if (row) {
    console.log(`사용자 조회: ${row}`);
    res.send(`로그인 성공: ${row.username}`);
  } else {
    res.send("로그인 실패");
  }
});

app.listen(port, () => {
  console.log("서버 레디");
});
