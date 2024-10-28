const fs = require("fs");
const path = require("path");

const directoryPath = "./";

function checkFile(filePath) {
  //파일에 대한 정보를 가져다가, 준비가 되면? 나를 불러줘
  fs.stat(filePath, (err, stats) => {
    // 준비가 됐을 때 처리할 로직이 들어가는 위치
    if (err) {
      console.log("조회 실패");
      return;
    }

    if (stats.isFile) {
      console.log(`${filePath}: 이건 파일 입니다`);
    } else if (stats.isDirectory()) {
      console.log(`${filePath}: 이건 디렉토리 입니다`);
    } else {
      console.log(`${filePath}: 모르겠음`);
    }
  });
}

function checkFileSync(filePath) {
  // 당장 파일 정보를 가져와서, 그 결과를 나에게 보고 하시오
  fs.statSync(filePath, (err, stats) => {
    // 준비가 됐을 때 처리할 로직이 들어가는 위치
    if (err) {
      console.log("조회 실패");
      return;
    }

    if (statSync.isFile) {
      console.log(`${filePath}: 이건 파일 입니다`);
    } else if (stats.isDirectory()) {
      console.log(`${filePath}: 이건 디렉토리 입니다`);
    } else {
      console.log(`${filePath}: 모르겠음`);
    }
  });
}

fs.readdir(directoryPath, (err, files) => {
  // 콜백함수 내용 - 디렉토리 읽는 게 끝났을 때 호출할 내용
  if (err) {
    console.log("읽기 오류");
    return;
  }

  // console.log(files);
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    console.log("파일: ", filePath);
    checkFile(filePath);
  });
});
