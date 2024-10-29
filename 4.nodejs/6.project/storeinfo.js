import { v4 as uuidv4 } from "uuid";

const CoffeeShops = [
  "스타벅스 강남역점",
  "투썸플레이스 삼성역점",
  "이디야커피 삼성역점",
  "할리스커피 홍대입구역점",
  "커피빈 강남역점",
  "메가커피 강남대로점",
  "빽다방 신촌점",
  "탐앤탐스 신논현점",
  "드롭탑 코엑스몰점",
  "커피베이 잠실점",
];
const cities = ["서울", "부산", "인천", "대구", "대전", "광주", "수원", "울산"];
const districts = ["강남구", "해운대구", "미추홀구", "중구", "서구", "북구", "팔달구", "남구"];
const streetNames = [
  "테헤란로",
  "센텀중앙로",
  "경원대로",
  "달구벌대로",
  "둔산남로",
  "연양로",
  "매산로",
  "삼산로",
];
const streetNumbers = ["3길", "45번길", "53번길", "5길", "9번길", "18번길", "13번길", "23번길"];
const buildingNumbers = ["10", "15", "22", "50", "12", "25", "7", "5"];

function generatorId() {
  return uuidv4();
}

function generatorCoffeeShop() {
  return CoffeeShops[Math.floor(Math.random() * CoffeeShops.length)];
}

function generatorType(coffeeShop) {
  return coffeeShop.split(" ", 1)[0];
}

function getRandomAddress(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatorAddress() {
  const city = getRandomAddress(cities);
  const district = getRandomAddress(districts);
  const streetName = getRandomAddress(streetNames);
  const streetNumber = getRandomAddress(streetNumbers);
  const buildingNumber = getRandomAddress(buildingNumbers);

  return `${city} ${district} ${streetName} ${streetNumber} ${buildingNumber}`;
}

const userDB = [];

for (let i = 0; i < 100; i++) {
  const coffeeShop = generatorCoffeeShop();
  userDB.push({
    id: generatorId(),
    name: coffeeShop,
    type: generatorType(coffeeShop),
    address: generatorAddress(),
  });
}

console.log(userDB);

import { createObjectCsvWriter } from "csv-writer";

const csvWrite = createObjectCsvWriter({
  path: "store.csv",
  header: [
    { id: "id", title: "Id" },
    { id: "name", title: "Name" },
    { id: "type", title: "Type" },
    { id: "address", title: "Address" },
  ],
});

csvWrite.writeRecords(userDB).then(() => console.log("카페 데이터 저장 완료"));
