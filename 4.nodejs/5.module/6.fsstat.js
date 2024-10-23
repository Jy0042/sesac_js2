import fs from "fs";

const directoryPath = "./";

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log("디렉토리 읽기 오류");
    return;
  }
  files.forEach((file) => {
    fs.stat(file, (err, stats) => {
      if (err) {
        console.log("파일 읽기 오류");
        return;
      }
      if (stats.isDirectory()) {
        console.log(`이 파일 ${file} 은 디렉토리 입니다`);
      }
      if (stats.isFile()) {
        console.log(`이 파일은 ${file} 은 파일 입니다`);
      }
    });
  });
});
