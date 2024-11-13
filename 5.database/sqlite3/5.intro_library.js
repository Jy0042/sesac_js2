import sqlite3 from "sqlite3";
// const sqlite3 = require("sqlite3").verbose();

const sqlite = sqlite3.verbose();

// 없으면 생성, 있으면 불러옴
const db = new sqlite.Database("test.db");
// const db = new sqlite3.Database(":memory:");

export function dbRunQuery(query, params = []) {
  return new Promise((resolve, reject) => {
    // pending, resolved, reject
    db.run(query, params, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
}

export function dbAllQuery(query, params = []) {
  return new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}
