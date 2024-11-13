import sqlite3 from "sqlite3";
// const sqlite3 = require("sqlite3").verbose();

const sqlite = sqlite3.verbose();

// 없으면 생성, 있으면 불러옴
const db = new sqlite.Database("test.db");
// const db = new sqlite3.Database(":memory:");

db.run("CREATE TABLE IF NOT EXISTS messages (text TEXT)");

db.run("INSERT INTO messages(text) VALUES (?)", ["Hello, SQLite"]);

db.each("SELECT * FROM messages", (err, row) => {
  if (err) throw err;
  console.log(row);
});

db.close();
