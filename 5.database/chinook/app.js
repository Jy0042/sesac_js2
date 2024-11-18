import express from "express";
import session from "express-session";
import sqlite3 from "better-sqlite3";
import path from "path";

const app = express();
const port = 3000;

const db = new sqlite3("../chinook.db");

app.use(express.json());

app.get("/", (req, res) => {
  const test = db.prepare(`SELECT * FROM artists limit 5`);
  const artists = test.all();
  res.json(artists);
});

app.listen(port, () => {
  console.log("서버 레디");
});
