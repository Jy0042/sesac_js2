import express from "express";
import sqlite3 from "better-sqlite3";
import path from "path";

const app = express();
const PORT = 3000;
const dbFile = "sample.db";
const db = new sqlite3(dbFile);

app.use(express.static("public"));
app.use(express.json());

// 공통 aipEndPoint 처리
const aipEndPoints = [
  { endpoint: "user", tableName: "users" },
  { endpoint: "order", tableName: "orders" },
  { endpoint: "order_item", tableName: "orderItems" },
  { endpoint: "item", tableName: "items" },
  { endpoint: "store", tableName: "stores" },
];

aipEndPoints.forEach(({ endpoint, tableName }) => {
  app.get(`/api/${endpoint}`, (req, res) => {
    try {
      const { name, gender } = req.query; // 쿼리 파라미터에서 'name', 'gender' 가져오기
      let query = `SELECT * FROM ${tableName}`;
      const params = [];

      // 이름 필터가 있을 경우 WHERE 조건 추가
      if (name || gender) {
        const conditions = [];
        if (name) {
          conditions.push("Name LIKE ?");
          params.push(`%${name}%`);
        }
        if (gender) {
          conditions.push("Gender = ?");
          params.push(gender);
        }
        query += ` WHERE ${conditions.join(" AND ")}`;
      }

      const data = db.prepare(query).all(...params);
      res.json(data); // 결과 반환
    } catch (err) {
      res.status(500).send(`DB 오류: ${err.message}`);
    }
  });
});

// 공통 htmlEndPoint 처리
const htmlEndPoints = ["users", "orders", "order_items", "items", "stores"];

htmlEndPoints.forEach((endpoint) => {
  app.get(`/${endpoint}`, (req, res) => {
    try {
      res.sendFile(path.resolve(`public/html/${endpoint}.html`));
    } catch (err) {
      res.status(500).send(`HTML 파일 로드 오류: ${err.message}`);
    }
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/html/users.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server launched successfully at http://localhost:${PORT}`);
});
