import csv from "csv-parser";
import fs from "fs";

import { v4 as uuidv4 } from "uuid";

const itemNames = [
  "Espresso Coffee",
  "Americano Coffee",
  "Mocha Coffee",
  "Watermelon Juice",
  "Lemon Juice",
  "Grape Juice",
  "Strawberry Cake",
  "Red Velvet Cake",
  "Vanilla Cake",
];

function generatorId() {
  return uuidv4();
}

async function generatorItemName() {
  return new Promise((resolve) => {
    let itemName = itemNames[Math.floor(Math.random() * itemNames.length)];
    resolve(itemName);
  });
}

const itemDB = [];

for (let i = 0; i < 20; i++) {
  const Name = await generatorItemName();
  const unitType = Name.split(" ").pop();
  const unitName = Name.split(" ").shift();

  function price(unitName) {
    switch (unitName) {
      case "Espresso":
        return 2500;
        break;
      case "Americano":
        return 3000;
        break;
      case "Mocha":
        return 5000;
        break;
      case "Watermelon":
        return 7000;
        break;
      case "Lemon":
        return 5000;
        break;
      case "Grape":
        return 6000;
        break;
      case "Strawberry":
        return 5500;
        break;
      case "Red":
        return 6500;
        break;
      case "Vanilla":
        return 5000;
        break;
    }
  }

  itemDB.push({
    id: generatorId(),
    itemName: Name,
    itemType: unitType,
    price: price(unitName),
  });
}

import { createObjectCsvWriter } from "csv-writer";
import { resolve } from "path";

const csvWrite = createObjectCsvWriter({
  path: "item.csv",
  header: [
    { id: "id", title: "Id" },
    { id: "itemName", title: "Name" },
    { id: "itemType", title: "Type" },
    { id: "price", title: "UnitPrice" },
  ],
});

csvWrite.writeRecords(itemDB).then(() => console.log("itemDB 저장 완료"));
