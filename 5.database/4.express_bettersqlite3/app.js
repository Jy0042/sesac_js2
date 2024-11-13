import express from "express";
import sqlite3 from "better-sqlite3";
import fs from "fs";

const app = express();
const port = 3000;
const dbFile = "myDB.db";

const db = new sqlite3(dbFile);

app.use(express.urlencoded({ extended: true }));

function initializeDatabase() {
  const sql = fs.readFileSync("init_database.sql", "utf8");
  const statements = sql.split(";");
  // console.log(statements);

  try {
    db.transaction(() => {
      // 실행을 원하는 쿼리문
      for (const statement of statements) {
        db.exec(statement);
      }
    })(); // 트랜젝션은 성공하면 자동 커밋, 실패하면 자동 롤백
    console.log("초기화 성공");
  } catch (err) {
    console.error("초기화 오류");
  }
}

initializeDatabase();

app.get("/users", (req, res) => {
  try {
    const users = db.prepare("SELECT * FROM users").all();
    console.log(`전체유저: ${JSON.stringify(users)}`);
    res.json(users);
  } catch (err) {
    res.status(500).send(`DB 오류: ${err.message}`);
  }
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  try {
    const user = db.prepare("SELECT * FROM users WHERE id = ?").get(id);
    if (user) {
      console.log(`유저: ${JSON.stringify(user)}`);
      res.json(user);
    } else {
      res.status(404).send("해당 유저 찾을 수 없음");
    }
  } catch (err) {
    res.status(500).send(`DB 오류: ${err.message}`);
  }
});

app.post("/users/", (req, res) => {
  const { username, password } = req.body;

  try {
    const insert = db
      .prepare("INSERT INTO users (username, password) VALUES (?,?)")
      .run(username, password);

    if (insert.changes > 0) {
      const userId = insert.lastInsertRowid;
      res.json({ message: "유저 추가 성공", userId });
    } else {
      res.status(404).send("유저 추가 실패");
    }
  } catch (err) {
    res.status(500).send(`DB 오류: ${err.message}`);
  }
});

app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const { username, password } = req.body;

  try {
    const result = db
      .prepare("UPDATE users SET username = ?, password = ? WHERE id = ?")
      .run(username, password, id);

    if (result.changes > 0) {
      console.log(`추가 완료: ${JSON.stringify({ id, username, password })}`);
      res.json({ message: "유저 업데이트 성공" });
    } else {
      res.status(404).send("유저 업데이트 실패");
    }
  } catch (err) {
    res.status(500).send(`DB 오류: ${err.message}`);
  }
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;

  try {
    const del = db.prepare("DELETE FROM users WHERE id = ?").run(id);

    if (del.changes > 0) {
      console.log(`삭제 완료: ID ${id}`);
      res.json({ message: "유저 삭제 성공", deleteId: id });
    } else {
      res.status(404).send("삭제할 유저 찾을 수 없음");
    }
  } catch (err) {
    res.status(500).send(`DB 오류: ${err.message}`);
  }
});

app.get("/:table", (req, res) => {
  const db_table = req.params.table;

  try {
    const query = db.prepare(`SELECT * FROM ${db_table}`);
    const rows = query.all();
    res.json(rows);
  } catch (err) {
    res.send(`테이블이 없음: ${db_table}`);
  }
});

app.listen(port, () => {
  console.log("서버 레디");
});
