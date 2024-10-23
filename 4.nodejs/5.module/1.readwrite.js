import fs from "fs";

// 파일 읽기
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.log("뭔가 실패? 파일 읽기 실패", err);
  } else {
    console.log("파일내용:", data);
  }
});

const content = "이것은 파일이 쓰여질 내용";
fs.writeFile("newfile.txt", content, "utf8", (err) => {
  if (err) {
    console.log("파일을 쓰는 중에 에러 발생");
  } else {
    console.log("파일에 내용이 성공적으로 쓰였습니다");
  }
});
