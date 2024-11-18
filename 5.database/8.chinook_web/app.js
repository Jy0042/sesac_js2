//라이브러리 추가
import dotenv from "dotenv";
import express from "express";
import sqlite3 from "sqlite3";
import path from "path";
dotenv.config();

// 변수 정의
const PORT = 3000;
const db = new sqlite3.Database(process.env.DB_PATH);
const app = express();

// 미들웨어 추가
app.use(express.static("public"));

// 라우트 정의
app.get("/", (req, res) => {
  // public 을 미들웨어로 노출한 경우에는 여기는 도달하지 않음
  res.sendFile(path.resolve("public/index.html"));
});

app.get("/api/search", (req, res) => {
  // const searchQuery = req.query.searchQuery;
  const { searchQuery, page = 1 } = req.query; // 위에 형식을 축약 // 페이지는 기본페이지 1로

  console.log(`사용자 입력: ${searchQuery}, 페이지 ${page}`);
  const itemsPerPage = 10; // 페이지당 열개만 출력
  const offset = (page - 1) * itemsPerPage; // 산수 계산을 통해 내 페이지를 원하는 offset이 맞는지 확인

  // 사용자가 요청한 내용이 몇개나 있고 그게 몇 페이지나 될 건지 계산하기
  const countSql = `SELECT COUNT(*) AS count FROM artists WHERE name LIKE ?`;
  db.get(countSql, [`%${searchQuery}%`], (err, row) => {
    if (err) {
      // 에러처리 코드 작성
      console.error("데이터베이스 쿼리 오류:", err);
      res.status(500).json({ error: "서버 내부 오류가 발생했습니다." });
    }

    const totalPage = Math.ceil(row.count / itemsPerPage);
    console.log(`갯수: ${row.count}, 토탈 페이지: ${totalPage}`);

    const sql = `SELECT * FROM artists WHERE name LIKE ? LIMIT ? OFFSET ?`;
    db.all(sql, [`%${searchQuery}%`, itemsPerPage, offset], (err, rows) => {
      res.json({ results: rows, currentPage: page, totalPage: totalPage, status: "ok" });
    });
  });
});

app.listen(PORT, () => {
  console.log("서버 레디");
});
