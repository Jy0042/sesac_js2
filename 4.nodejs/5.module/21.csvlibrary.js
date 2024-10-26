const fs = require("fs");

function readCSV(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      callback(err, null);
      // console.log("파일 읽는 도중 오류 발생", err.message);
      return;
    }

    const rows = data.split("\n");
    const result = rows.map((row) => row.split(","));

    callback(null, result);
  });
}

function writeCSV(filePath, callback) {
  // 사용자가 전달한 자료 구조를, 다시 String 포맷으로 변환
  const csvContent = content.map((row) => row.join(",")).join("\n");

  fs.writeFile(filePath, csvContent, (err) => {
    if (err) {
      console.log("파일 쓰기 오류", err.message);
      return;
    }
    console.log("쓰기 완료");
    callback(null);
  });
}

module.exports = { readCSV, writeCSV };
