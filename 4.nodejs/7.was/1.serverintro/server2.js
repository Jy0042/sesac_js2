import http from "http";

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-Type": "text/html; charset=utf-8",
//   });
//   res.end("<p>헬로우 어게인</p>");
// });

// server.listen(3001, () => {
//   console.log("서버 대기중... on 5000번에서");
// });

// 더욱 간결하게
http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    res.end("<p>헬로우 어게인 3001</p>");
  })
  .listen(3001, () => {
    console.log("서버 대기중... on 3001번에서");
  });

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    res.end("<p>헬로우 어게인 4000</p>");
  })
  .listen(4000, () => {
    console.log("서버 대기중... on 4000번에서");
  });

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    res.end("<p>헬로우 어게인 6000</p>");
  })
  .listen(6000, () => {
    console.log("서버 대기중... on 6000번에서");
  });
