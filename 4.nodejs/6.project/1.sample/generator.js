const names = ["John", "Jane", "Michael", "Emily", "William", "Olivia"];
const lastName = ["김", "이", "박", "최", "유", "신"];
const firstName = ["김", "이", "박", "최", "유", "신"];
const cities = ["New York", "Los Angeles", "Chicago", "Philadelphia"];

function generatorName() {
  return (
    lastName[Math.floor(Math.random() * lastName.length)] +
    firstName[Math.floor(Math.random() * firstName.length)]
  );
}

function generatorGender() {
  return Math.random() < 0.5 ? "남" : "여";
}

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatorBirth() {
  // YYYY-MM-DD 포멧으로 반환
  // const year = Math.floor(Math.random() * (2010 - 1960 + 1)) + 1960;
  const year = getRandomInRange(1960, 2010);
  // const month = Math.floor(Math.random() * 12) + 1;
  const month = getRandomInRange(1, 12);
  // const day = Math.floor(Math.random() * 28) + 1;
  const day = getRandomInRange(1, 28);

  return `${year}-${month}-${day}`;
}

function generatorAddress() {
  // 앞에 1 ~ 100 까지의 번지수를 붙이 주소를 생성
  const street = getRandomInRange(1, 100);
  const city = cities[Math.floor(Math.random() * cities.length)];
  return `${street} ${city}`;
}

const uesrdb = [];

for (let i = 0; i < 10; i++) {
  uesrdb.push([generatorName(), generatorGender(), generatorBirth(), generatorAddress()]);
}

for (const user of uesrdb) {
  console.log(user);
}

// console.log(uesrdb);

// csv 형태로 파일에 저장
// user.csv

// import fs from "fs";

// function writeDataToCSV(data, filePath) {
//   const header = ["Name", "Gender", "Birthdate", "Address"];
//   const rows = data.map((row) => row.join(","));
//   const csvContent = [header, ...rows].join("\n");

//   fs.writeFileSync(filePath, csvContent, "utf8");
// }

// writeDataToCSV(uesrdb, "user.csv");

import createCsvWriter from ("csv-writer").createObjectCsvWriter;

const csvWrite = createCsvWriter({
  path: "user2.csv",
  header: [
    { id: "name", title: "Name" },
    { id: "gender", title: "Gender" },
    { id: "birthdate", title: "Birthdate" },
    { id: "city", title: "Address" },
  ],
});

csvWrite.writeRecords(userdb).then(() => {
  console.log("저장 됨");
});
