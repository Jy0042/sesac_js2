const fs = require("fs");

const filePath = "hello.csv";

function csv_readfile(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log("파일 읽는 도중 오류 발생", err.message);
      return;
    }
    console.log(data);
    console.log(typeof data);

    // 이 문자열을 다시 우리가 원하는 자료구조(데이터형) 으로 변환을 시켜줘야함
    // 1. 데이터를 한줄한줄 구분한다.
    const rows = data.split("\n"); // \n 은 뉴라인 - 줄바꿈
    // console.log(rows);

    // 2. 한줄 한줄 내에서 , 로 구분
    // for (let i = 0; i < rows.length; i++) {
    //   const row = rows[i];
    //   // console.log(row);
    //   const columns = row.split(",");
    //   console.log(columns);
    // }
    const result = rows.map((row) => row.split(","));

    callback(result);
  });
}

const content = [
  ["이름", "나이", "직업"],
  ["홍길동", 20, "학생"],
  ["김영희", 22, "디자이너"],
  ["이철수", 19, "개발자"],
  ["박민수", 21, "엔지니어"],
  ["테스트", 99, "러너"],
];

const csvContent = content.map((row) => row.join(",")).join("\n");

function csv_writefile() {
  fs.writeFile(filePath, csvContent, (err) => {
    if (err) {
      console.log("파일 쓰기 오류", err.message);
      return;
    }
    console.log("쓰기 완료");
  });
}
// csv_writefile(filePath, csvContent);
csv_readfile(filePath, (data) => {
  console.log("csv 파일 내용: ", data);
});
