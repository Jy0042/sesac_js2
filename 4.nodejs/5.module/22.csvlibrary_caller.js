const { readCSV, writeCSV } = require("./21.csvlibrary");

const filePath = "hello.csv";

// const content = [
//   ["이름", "나이", "직업"],
//   ["홍길동", 20, "학생"],
//   ["김영희", 22, "디자이너"],
//   ["이철수", 19, "개발자"],
//   ["박민수", 21, "엔지니어"],
//   ["테스트", 99, "러너"],
// ];

writeCSV(filePath, content, (err) => {
  if (err) {
    console.error("파일 쓰기 오류", err.message);
    callback(err);
  }
});

// readCSV(filePath, (data) => {
//   if (err) {
//     console.log("파일 읽기 실패", err, message);
//   }
//   console.log("파일 내의 결관는: ", data);
// });
