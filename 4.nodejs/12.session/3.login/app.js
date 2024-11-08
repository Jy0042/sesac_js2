const express = require("express");
const session = require("express-session");
const path = require("path");
const { send } = require("process");

const app = express();
const port = 3000;

// 미들웨어
app.use("/public", express.static("public"));

// 요청 바디에 json이 있으면 req.body에 담기
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

const users = [
  {
    id: 1,
    username: "user1",
    password: "pw123",
  },
  {
    id: 2,
    username: "user2",
    password: "pw123",
  },
];

app.post("/login", (req, res) => {
  // 로그인 코드 개발
  const { username, password } = req.body; // 미들웨어로 파서 추가
  console.log("req.body:", req.body);

  const user = users.find((userAccount) => {
    return userAccount.username === username && userAccount.password === password;
  });

  // 사용자가 입력한 id/pw 를 위에 users 자료 구조에서 검색
  if (user) {
    console.log(`username: ${username}, password: ${password}`);
    return res.json({ message: "로그인 성공" });
  } else {
    return res.status(401).json({ message: "로그인 실패" });
  }
});

app.get("/profile", (req, res) => {
  const user = req.session.users;
  console.log("/profile:user", user);

  if (user) {
    res.json({ username: user.username, message: "프로필 정보" });
  } else {
    res.status(401).json({ message: "인증되지 않은 사용자" });
  }
});

// 로그아웃은 어떻게?
app.get("/logout", (req, res) => {
  // 세션에서 사용자 정보를 삭제. 어떻게? => 찾아본다
});

app.listen(port, () => {
  console.log("서버 레디");
});
