import sqlite3 from "sqlite3";
// const sqlite3 = require("sqlite3").verbose();

const sqlite = sqlite3.verbose();

// 없으면 생성, 있으면 불러옴
const db = new sqlite.Database("test.db");
// const db = new sqlite3.Database(":memory:");

function dbRunQuery(query, params = []) {
  return new Promise((resolve, reject) => {
    // pending, resolved, reject
    db.run(query, params, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
}

function dbAllQuery(query, params = []) {
  return new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

(async () => {
  // 비동기 익명함수로 만들어 바로 당장 실행
  try {
    await dbRunQuery("CREATE TABLE IF NOT EXISTS message (text TEXT)");
    await dbRunQuery("INSERT INTO messages(text) VALUES (?)", ["Hello, SQLite"]);
    const rows = await dbAllQuery("SELECT * FROM messages");
    rows.forEach((row) => {
      console.log(row);
    });
  } catch (err) {
    console.error("에러: ", err);
  } finally {
    db.close();
  }
})();
