import http from "http";
import { promises as fs } from "fs";
import path from "path";
import { parse } from "querystring";

const users = {};

const server = http
  .createServer(async (req, res) => {
    // 만약 사용자사 / 를 요청하면 index.html 을 전달하고,
    // 만약 사용자가 /about 을 요청하면 about.html 을 전달
    // 만약 그 외 나머지를 요청하면? 우리는 없다고 반납 (404 Not Found) 를 반납
    // 힌트: req.url 비교
    console.log(req.method, req.url);

    try {
      // image 폴더를 요청하면, 우리는 static 폴더 안에 있는 그 파일을 전달
      if (req.method === "GET") {
        if (req.url === "/") {
          const data = await fs.readFile("./index.html");
          res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8",
          });
          res.end(data);
        } else if (req.url === "/about") {
          const data = await fs.readFile("./about.html");
          res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8",
          });
          res.end(data);
        } else if (req.url.startsWith("/image/")) {
          // 1. url 뒤에 있는 글자를 잘라서,
          // 2. 파일명을 가져오고
          // 3. 우리의 이미지 디렉토리인 static/ 뒤에 위 파일명을 붙여서
          // 4. 그 내용을 전달
          const imageName = path.basename(req.url);
          const imagePath = path.join("static", imageName);

          console.log(imagePath);

          const imageData = await fs.readFile(imagePath);

          res.writeHead(200, {
            "Content-Type": "img/jpeg",
          });
          res.end(imageData);
        } else if (req.url === "/user") {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(users));
        }
      } else if (req.method === "POST") {
        if (req.url === "/user") {
          let body = "";

          req.on("data", (data) => {
            body += data;
            console.log(`데이터가 받아지는 동안의 chunk: ${data}`);
          });

          req.on("end", () => {
            console.log(body);
            console.log(`데이터가 다 받아진 후: ${body}`);

            const formData = parse(body);

            console.log("받은 데이터는?", formData);
            const username = formData.name;
            console.log("그래서 유저네임은?", username);

            if (username) {
              users[username] = username;
              res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
              res.end("등록 성공");
            } else {
              res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
              res.end("등록 실패");
            }
          });
        } else {
          res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
          res.end("Not Found");
        }
      } else if (req.method === "DELETE") {
        if (req.url === "/user") {
          let body = "";

          req.on("data", (data) => {
            body += data;
            console.log("DELETE: ", body);
          });
          req.on("end", () => {
            const { name: username } = parse(body);
            if (users[username]) {
              delete users[username];
              res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
              res.end(`${username} 삭제 성공`);
            } else {
              res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
              res.end("삭제 실패");
            }
          });
        }
      } else {
        res.writeHead(404);
        res.end("Not Found");
      }
    } catch (err) {
      console.error(err.message);
      res.writeHead(500, {
        "Content-Type": "text/html; charset=utf-8",
      });
      res.end(`알수없는 오류가 발생했습니다`);
    }
  })
  .listen(3000, () => {
    console.log("서버 대기중... on 3000번에서");
  });
