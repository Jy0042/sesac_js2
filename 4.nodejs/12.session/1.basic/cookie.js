const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers);
  res.writeHead(200, { "set-cookie": "myCookie=test" });
  res.end("The End");
});

server.listen(3000, () => {
  console.log("서버 레디");
});
