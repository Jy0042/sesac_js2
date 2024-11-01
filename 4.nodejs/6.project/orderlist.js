import csv from "csv-parser";
import fs from "fs";

import { v4 as uuidv4 } from "uuid";

const users = [];
const stores = [];

// csv 불러오기
async function readCsv(file, arr) {
  return new Promise((resolve) => {
    fs.createReadStream(file)
      .pipe(csv())
      .on("data", (data) => arr.push(data))
      .on("end", () => {
        console.log(file, "불러오기 성공");
        resolve();
      });
  });
}

await readCsv("user.csv", users);
await readCsv("store.csv", stores);

// ---------------------

// uuid 생성
function generatorId() {
  return uuidv4();
}

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 날짜 생성
function generatorOrderAt() {
  const year = getRandomInRange(2020, 2024);
  const month = String(getRandomInRange(1, 12)).padStart(2, "0");
  const day = String(getRandomInRange(1, 28)).padStart(2, "0");
  const hour = String(getRandomInRange(1, 24)).padStart(2, "0");
  const minute = String(getRandomInRange(1, 60)).padStart(2, "0");
  const second = String(getRandomInRange(1, 60)).padStart(2, "0");

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

// 스토어ID
function orderStore() {
  const storeId = [];

  stores.map((store) => storeId.push(store.Id));

  return storeId;
}

// 유저ID
function orderUser() {
  const userId = [];

  users.forEach((user) => userId.push(user.Id));

  return userId;
}

// 오더 데이터 저장소 초기화
const orderDB = [];

// orderDB 생성
for (let i = 0; i < 10000; i++) {
  const storeId = orderStore();
  const userId = orderUser();

  orderDB.push({
    id: generatorId(),
    orderAt: generatorOrderAt(),
    storeId: storeId[Math.floor(Math.random() * storeId.length)],
    userId: userId[Math.floor(Math.random() * userId.length)],
  });
}

import { createObjectCsvWriter } from "csv-writer";
import { resolve } from "path";

const csvWrite = createObjectCsvWriter({
  path: "order.csv",
  header: [
    { id: "id", title: "Id" },
    { id: "orderAt", title: "OrderAt" },
    { id: "storeId", title: "StoreId" },
    { id: "userId", title: "UserId" },
  ],
});

csvWrite.writeRecords(orderDB).then(() => console.log("orderDB 저장 완료"));
