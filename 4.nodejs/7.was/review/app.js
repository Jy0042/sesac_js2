import http from "http";
import { promises as fs } from "fs";

const port = 3000;

let users = [];

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.method === "GET") {
    handleGetRequest(req, res);
  } else if (req.method === "POST") {
    handlePostRequest(req, res);
  } else if (req.method === "PUT") {
    handlePutRequest(req, res);
  } else if (req.method === "DELETE") {
    handleDeleteRequest(req, res);
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

// fs.reaFile은 파일일 읽는 작업이르모 Promise 를 반환한다 그러므로 async/await 이 필요
async function handleGetRequest(req, res) {
  try {
    if (req.url === "/") {
      const data = await fs.readFile("./index.html");
      res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
      res.end(data);
    } else if (req.url === "/user") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(users));
    }
  } catch {
    res.writeHead(404);
    res.end("Not Found");
  }
}

function handlePostRequest(req, res) {
  if (req.url === "/user") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      if (req.headers["content-type"] === "text/plain") {
        // body가 'name=aaa' 형식일 때 파싱
        const [key, value] = body.split(":");
        const username = key === "name" ? value : null;

        if (username) {
          users.push({ name: username });
          res.end(`text/plain으로 데이터 받음: ${username}`);
        } else {
          res.end("올바른 형식이 아닙니다.");
        }
      } else if (req.headers["content-type"] === "application/json") {
        const parsedData = JSON.parse(body);
        const username = parsedData.name;
        users[username] = username;
        users.push(parsedData);
        res.end(`json으로 데이터 받음: ${JSON.stringify(body)}`);
      } else if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
        console.log(req.headers);
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
        return res.end("form으로 데이터를 잘 받았음");
      } else {
        res.writeHead(404);
        return res.end("모르는 타입");
      }
    });
  }
}

function handlePutRequest(req, res) {
  const urlParts = req.url.split("/");
  const username = urlParts[2];

  if (!username) {
    res.writeHead(400, { "Content-Type": "text/plain" });
    return res.end("업데이트 실패");
  }

  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    let updateData;
    try {
      updateData = JSON.parse(body);
    } catch (error) {
      res.writeHead(400, { "Content-Type": "text/plain" });
      return res.end("잘못된 형식의 데이터");
    }

    const userIndex = users.findIndex((u) => u.name === username);

    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updateData };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(users[userIndex]));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end(`${username} 사용자 찾을 수 없음`);
    }
  });
}

function handleDeleteRequest(req, res) {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    const [key, username] = body.includes("=") ? body.split("=") : [];

    if (key === "name" && username) {
      const initialLength = users.length;
      users = users.filter((u) => u.name !== username);

      if (users.length < initialLength) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`${username} 삭제 성공`);
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end(`${username} 사용자를 찾을 수 없음`);
      }
    } else {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("삭제 실패");
    }
  });
}

server.listen(port, () => {
  console.log("server ready");
});
