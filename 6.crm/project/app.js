import e from "express";
import sqlite3 from "better-sqlite3";
import path from "path";

const app = e();
const PORT = 3000;
const db = sqlite3("");

app.use(e.static("public"));

app.listen(PORT, () => {
  console.log(`🚀 Server launched successfully at http://localhost:${PORT}`);
});
