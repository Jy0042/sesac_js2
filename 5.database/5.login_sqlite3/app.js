import express from "express";
import session from "express-session";
import connectSqlite3 from "connect-sqlite3";
import sqlite3 from "sqlite3";
import path from "path";

const app = express();
const port = 3000;

const SQLiteStore = connectSqlite3(session);

const db = new sqlite3.Database("users.db");

app.use(
  session({
    secret: "my-secret-1234",
    resave: false,
    saveUninitialized: true,
    store: new SQLiteStore({
      db: "users.db",
    }),
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(path.resolve("public")));

// 라우팅
app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

app.get("/profile", (req, res) => {
  res.sendFile(path.resolve("public/profile.html"));
});

app.get("/profile-data", (req, res) => {
  if (!req.session.user) {
    return res.status(401).send("로그인 필요");
  }

  const userId = req.session.user.id;
  const queryStr = `SELECT username, email, created_at, role FROM users WHERE id = ?`;

  db.get(queryStr, [userId], (err, row) => {
    if (err) {
      return res.status(500).send("DB 오류");
    }

    if (row) {
      res.json(row);
    } else {
      res.status(404).send("사용자 정보 조회할수 없음");
    }
  });
});

app.get("/check-login", (req, res) => {
  const user = req.session.user;

  console.log(`loginCheck: ${JSON.stringify(user)}`);

  if (user) {
    res.json({ username: user.username });
  } else {
    res.status(401).send();
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(`/login : ${username}, ${password}`);

  const queryStr = `SELECT * FROM users WHERE username = ? AND password = ?`;

  db.get(queryStr, [username, password], (err, row) => {
    if (row) {
      req.session.user = { id: row.id, username: row.username };
      console.log(`사용자 조회: ${JSON.stringify(row)}`);
      // res.redirect("/profile");

      res.send(`로그인 성공: ${row.username}`);
    } else {
      res.status(401).send("로그인 실패");
    }
  });
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

app.listen(port, () => {
  console.log("서버 레디");
});
