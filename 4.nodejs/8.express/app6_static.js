import express from "express";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// 정적 폴더 정의
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const htmlFile = path.join(__dirname, "public", "index.html");

  try {
    const data = await fs.readFile(htmlFile);
    res.send(data);
  } catch (err) {
    res.status(500).send("서버오류");
  }
});

app.get("/cat", (req, res) => {
  const htmlFile = path.join(__dirname, "public", "index.html");

  fs.readFile(htmlFile, "utf8", (err, data) => {
    w;
  });
});

app.get("/sendfile", (req, res) => {
  const htmlFile = path.join(__dirname, "public", "index2.html");
  // res.sendFile(htmlFile);

  res.sendFile(htmlFile, (err) => {
    if (err) {
      res.status(500).send("서버 오류");
      // throw new Error("파일 없음");
    }
  });
});

// 여기까지 왔는데 매칭되는 라우트 없으면?
app.use((req, res) => {
  res.status(404).send("없음");
});

app.use((err, req, res, next) => {
  res.status(500).send("서버 오류!");
});

app.listen(port, () => {
  console.log("서버 레디");
});
