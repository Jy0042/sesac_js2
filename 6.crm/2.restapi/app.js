import express from "express";
import sqlite3 from "sqlite3";
import path from "path";
import morgan from "morgan";
import fs from "fs";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;
const db = new sqlite3.Database("./user-sample.db");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logStream = fs.createWriteStream(path.join(__dirname, "access.log"), { flags: "a" });

app.use(express.static("public"));
app.use(morgan("dev", { stream: logStream }));
// app.use(
//   morgan("dev", {
//     skip: (req, res) => res.statusCode === 404,
//   })
// );
// combined - 아파치 서버 로그 포멧
// common - 요약된 상태
// dev - 개발시 유용한 모드
// tiny
// short

// app.use(myLogger);

function myLogger(req, res, next) {
  console.log(`LOG: ${req.method} ${req.url}`);
  next();
}

// 라우트
// 시스템 호출용 API
app.get("/api/users", (req, res) => {
  console.log("/api/users 호출");
  const query = "SELECT * FROM users";

  db.all(query, [], (err, rows) => {
    res.json(rows);
  });
});

app.get("/api/user/:id", (req, res) => {
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
app.get("/user/:id", (req, res) => {
  res.sendFile(path.resolve("public/user_detail.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/user.html"));
});

app.listen(PORT, () => {
  console.log("CRM Server is ready to start...");
  console.log("Server is ready to start http://localhost:3000");
});
