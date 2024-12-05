const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const PORT = 3000;
let posts = [];

app.use(
  cors({
    origin: ["http://localhost:3001", "http:127.0.0.1:3001"],
    methods: ["GET", "POST", "DELETE"],
  })
);

app.use(morgan("dev"));
app.use(express.json());

app.post("/api/boardwrite", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "제목과 내용을 모두 입력해주세요" });
  }

  const newPost = {
    id: posts.length + 1,
    title,
    content,
    date: new Date().toISOString(),
  };

  posts.push(newPost);

  console.log("posts 배열 상태:", posts); // 배열 상태 출력
  res.status(200).json({ message: "글이 작성되었습니다", data: newPost });
});

app.get("/api/posts", (req, res) => {
  console.log("서버에서 보내는 데이터:", posts);
  res.status(200).json(posts);
});

app.delete("/api/posts/:id", (req, res) => {
  const { id } = req.params;

  // ID에 해당하는 게시글 찾기
  const postIndex = posts.findIndex((post) => post.id === parseInt(id));

  if (postIndex === -1) {
    return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
  }

  // 해당 게시글 삭제
  posts.splice(postIndex, 1);

  res.status(200).json({ message: "게시글이 삭제되었습니다." });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
