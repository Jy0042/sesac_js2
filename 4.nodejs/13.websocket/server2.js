const express = require("express");
const expressWs = require("express-ws");
const path = require("path");

const port = 3000;

const app = express();
expressWs(app);

// 나에게 접속하는 사용자를 관리할 자료구조
const wsClient = new Map();

app.get("/", (req, res) => {
  res.sendFile(path, join(__dirname, "public", "chat_client.html"));
});

// 웹소켓을 처리하는 EP(엔드포인트)
app.ws("/chat", (ws, req) => {
  const clientIp = req.socket.remoteAddress;
  console.log("클라이언트: ", clientIp);

  ws.on("message", (message) => {
    const messageString = message.toString("utf8");
    console.log("받은메세지: ", messageString);

    const parsedMessage = JSON.parse(messageString);
    const username = parsedMessage.username;
    const content = parsedMessage.content;

    if (username && !wsClient.has(username)) {
      wsClient.set(username, ws); // 새로운 사용자면? 우리의 목록에 추가
      console.log(`새로운 사용자 접속자: ${username}, ${ws}`);
    }

    // ws.send(messageString);
    if (parsedMessage.type !== "session") {
      wsClient.forEach((client, clientId) => {
        if (client.readyState === ws.OPEN) {
          const messageResponse = {
            type: "response",
            // username: parsedMessage.username,
            sender: username,
            content: content,
          };
          client.send(JSON.stringify(messageResponse));
        }
      });
    } else if (parsedMessage.type === "session") {
      wsClient.forEach((client, clientId) => {
        if (client.readyState === ws.OPEN) {
          const messageResponse = {
            type: "newUser",
            content: `${username}님이 입장하였습니다.`,
          };
          client.send(JSON.stringify(messageResponse));
        }
      });
    }
  });
  ws.on("close", () => {
    console.log("사용자 나감");
    let username = "";

    wsClient.forEach((client, clientId) => {
      if (client === ws) {
        wsClient.delete(clientId);
        username = clientId;
      }
    });

    wsClient.forEach((client, clientId) => {
      if (client.readyState === ws.OPEN) {
        const messageResponse = {
          type: "newUser",
          content: `${username} 님이 퇴장하였습니다`,
        };
        client.send(JSON.stringify(messageResponse));
      }
    });
  });
});

app.listen(port, () => {
  console.log("서버 레디");
});
