import http from "http";
import fs from "fs";

// 우리의 fs 의 콜백기반의 비동기 함수를, promise 를 통해서,
// 일종의 status 를 반납 받아서, await 로 대기(동기) 처리
function readFilePromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

http
  .createServer(async (req, res) => {
    // 파일로 부터 컨텐츠를 읽어와서 그 내용 전달해주기
    try {
      const data = await readFilePromise("./index.html");
      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
      });
      res.end(data);
    } catch (err) {
      console.error(err);
      res.writeHead(500, {
        "Content-Type": "text/html; charset=utf-8",
      });
      res.end(`알수없는 오류가 발생했습니다`);
    }
  })
  .listen(3000, () => {
    console.log("서버 대기중... on 3000번에서");
  });
