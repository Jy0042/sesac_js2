import express from "express";
import sqlite3 from "sqlite3";
import fs from "fs";

const app = express();
const port = 3000;
const dbFile = "myDB.db";

const db = new sqlite3.Database(dbFile);

const allowedTables = ["users", "products", "books"];

app.use(express.urlencoded({ extended: true }));

function initializeDatabase() {
  const sql = fs.readFileSync("init_database.sql", "utf8");

  db.exec(sql, (err) => {
    if (err) {
      if (err.errno === 19) {
        console.warn("초기화 이미 이전에 완료");
      } else {
        console.error("초기화 오류");
      }
    } else {
      console.log("초기화 성공");
    }
  });
}

initializeDatabase();

app.put("/users/:id", (req, res) => {
  // 사용자 정보를 바꾸려면 어떻게 해야할까?
  const id = req.params.id;
  const { username, password } = req.body;

  // 입력값 받아올 변수
  let fields = [];
  let values = [];

  if (username !== undefined) {
    fields.push("username=  ?");
    values.push(username);
  }

  if (password !== undefined) {
    fields.push("password = ?");
    values.push(password);
  }

  if (fields.length === 0) {
    return res.status(400).send("변경할 필드가 없음");
  }

  values.push(id);

  console.log(fields.join(", "), values);

  const query = `UPDATE users SET ${fields.join(", ")} WHERE id = ?`;

  db.run(query, values, (err) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("DB 업데이트 오류");
    }

    res.send(`ID: ${id} 사용자 정보 업데이트`);
  });
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM users WHERE id = ?";

  db.run(query, [id], (err) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("DB 삭제 오류");
    }
    res.send(`ID: ${id} 사용자 삭제 완료`);
  });
});

app.post("/users", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  const query = "INSERT INTO users (username, password) VALUES (?,?)";

  db.run(query, [username, password], function (err) {
    if (err) {
      console.error("오류!", err);
      return res.status(500), send("내부오류");
    }
    res.send(`사용자 추가 완료: ${this.lastID}`);
  });
});

app.get("/:table", (req, res) => {
  const db_table = req.params.table;

  if (!allowedTables.includes(db_table)) {
    return res.status(401).send("Invalid table name");
  }

  const query = `SELECT * FROM ${db_table}`;
  db.all(query, (err, rows) => {
    if (err) {
      res.send("DB조회 오류");
      return;
    }

    res.json(rows);
  });
});

app.get("/:table/:id", (req, res) => {
  const db_table = req.params.table;
  const id = req.params.id;

  if (!allowedTables.includes(db_table)) {
    return res.status(401).send("Invalid table name");
  }

  const query = `SELECT * FROM ${db_table} WHERE ID = ?`;
  db.get(query, [id], (err, row) => {
    if (err) {
      return res.send("DB조회 오류");
    }

    if (!row) {
      return res.status(404).send(`Invalid ID: ${id}`);
    }

    res.json(row);
  });
});

app.listen(port, () => {
  console.log("서버 레디");
});
