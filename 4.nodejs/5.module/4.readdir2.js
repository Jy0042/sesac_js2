import fs from "fs";
import path from "path"; // 변경된 코드

const directoryPath = "../3.function";

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log("읽기 실패", err.message);
    return;
  }

  console.log(files);
  console.log(files[0]);
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file); // 변경된 코드
    // 변경된 코드
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.log("파일 내용 읽기 실패", err.message);
        return;
      }
      console.log(data);
    });
  });
});
