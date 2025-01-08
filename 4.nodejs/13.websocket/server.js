const WebSocket = require("ws");

const port = 8000;
const wss = new WebSocket.Server({ port: port });

wss.on("listening", () => {
  console.log("웹소켓 레디...");
});

wss.on("connection", (ws, req) => {
  const clientIp = req.socket.remoteAddress;
  console.log("접속한 클라이언트: ", clientIp);

  ws.on("message", (message) => {
    const messageString = message.toString("utf8");
    console.log(`${clientIp}로 부터 받은 메세지: ${messageString}`);

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        // 현재 연결을 맺고 있는 소켓
        client.send(JSON.stringify({ type: "message", content: message }));
        console.log(`서버가 응답 보냈음`);
      }
    });
  });

  ws.on("close", () => {
    console.log("접속 종료");
  });
});
