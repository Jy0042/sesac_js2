const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const port = 3000;

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

const users = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
  { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
  { id: 3, name: "Charlie", email: "charlie@example.com", age: 22 },
];

// app.use(cors()); // 나는 모든 거 다 허용할거야 끝 (보안 최악)
app.use(
  cors({
    origin: ["http://localhost:3001", "http://127.0.0.1:3001"],
    methods: ["GET", "POST"],
  })
);

app.use(morgan("dev")); // 기본 개발자 디버깅

// API 라우트 셋업
app.get("/api/users", (req, res) => {
  const summary = users.map((u) => ({ id: u.id, name: u.name }));
  res.json(summary);
});

app.get("/api/users/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: "User Nof Found" });
  }
  console.log(user);

  res.json(user);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
