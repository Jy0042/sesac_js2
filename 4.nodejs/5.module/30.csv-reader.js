import fs from "fs";
import csv from "csv-parser";

const results = [];

fs.createReadStream("hello.csv")
  .pipe(csv())
  .on("data", (data) =>
    // 데이터를 스트림으로 읽으면서 처리
    results.push(data)
  )
  .on("end", () => {
    // 데이터 읽는 게 끝났을 때 처리하는 로직
    console.log(results);
  });
