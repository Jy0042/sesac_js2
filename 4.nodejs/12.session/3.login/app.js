const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();
const port = 3004;
const sessionTime = 10000;

// 미들웨어
app.use("/public", express.static("public"));

// 요청 바디에 json이 있으면 req.body에 담기
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: sessionTime,
    },
  })
);

app.use((req, res, next) => {
  if (req.session.user) {
    req.session.touch();
    req.session.cookie.maxAge = sessionTime; // 세션 만료 시간 재설정

    const remainingTime = req.session.cookie.expires - Date.now();
    console.log("세션 남은 시간 (밀리초):", remainingTime);
  }
  next();
});

// static 폴더 정의
app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

const users = [
  {
    id: 1,
    username: "user1",
    password: "pw123",
    hobby: "sleeping",
  },
  {
    id: 2,
    username: "user2",
    password: "pw123",
    hobby: "studying",
  },
  {
    id: 3,
    username: "user3",
    password: "pw123",
    hobby: "walking",
  },
];

app.post("/login", (req, res) => {
  // 로그인 코드 개발
  const { username, password } = req.body; // 미들웨어로 파서 추가
  console.log(`사용자로 부터 받아온 username ${username} , password ${password}`);

  const user = users.find((userAccount) => {
    return userAccount.username === username && userAccount.password === password;
  });

  // 사용자가 입력한 id/pw 를 위에 users 자료 구조에서 검색
  if (user) {
    req.session.user = user;

    console.log(`username: ${username}, password: ${password}`);
    return res.json({ message: "로그인 성공" });
  } else {
    return res.status(401).json({ message: "로그인 실패" });
  }
});

app.get("/profile", (req, res) => {
  const user = req.session.user;
  console.log("/profile:user", user);

  if (user) {
    res.json({ username: user.username, hobby: user.hobby, message: "프로필 정보" });
  } else {
    res.status(401).json({ message: "인증되지 않은 사용자" });
  }
});

// 로그아웃은 어떻게?
app.get("/logout", (req, res) => {
  const user = req.session.user;

  if (user && user.username) {
    req.session.destroy();
    res.json({ message: "로그아웃 하였습니다" });
  } else {
    res.json({ message: "로그인 상태가 아닙니다" });
  }
});

app.get("/check-login", (req, res) => {
  const user = req.session.user;

  console.log("/check-login", user);

  if (user) {
    res.json({ username: user.username });
  } else {
    res.status(401).send();
  }
});

app.listen(port, () => {
  console.log("서버 레디");
});
