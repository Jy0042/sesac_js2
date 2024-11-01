import { v4 as uuidv4 } from "uuid";
import csv from "csv-parser";
import fs from "fs";

function generatorId() {
  return uuidv4();
}

const orders = [];
const items = [];

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
await readCsv("order.csv", orders);
await readCsv("item.csv", items);

function orderIds() {
  const orderId = [];

  orders.map((order) => orderId.push(order.Id));

  return orderId;
}

function itemIds() {
  const itemId = [];

  items.map((item) => itemId.push(item.Id));

  return itemId;
}

const orderItem = [];

// orderDB 생성
for (let i = 0; i < 50000; i++) {
  const orderId = orderIds();
  const itemId = itemIds();

  orderItem.push({
    id: generatorId(),
    orderId: orderId[Math.floor(Math.random() * orderId.length)],
    itemId: itemId[Math.floor(Math.random() * itemId.length)],
  });
}

import { createObjectCsvWriter } from "csv-writer";
import { resolve } from "path";

const csvWrite = createObjectCsvWriter({
  path: "orderitem.csv",
  header: [
    { id: "id", title: "Id" },
    { id: "orderId", title: "OrderId" },
    { id: "itemId", title: "ItemId" },
  ],
});

csvWrite.writeRecords(orderItem).then(() => console.log("orderItem 저장 완료"));
