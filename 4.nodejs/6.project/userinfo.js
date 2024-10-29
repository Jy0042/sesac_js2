import { v4 as uuidv4 } from "uuid";

const lastNames = ["김", "이", "박", "정", "최", "조", "강", "윤"];
const firstNames = ["서준", "하윤", "도윤", "서아", "하준", "시우", "지호", "하은"];
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

function generatorName() {
  return (
    lastNames[Math.floor(Math.random() * lastNames.length)] +
    firstNames[Math.floor(Math.random() * firstNames.length)]
  );
}

function generatorGender() {
  return Math.random() < 0.5 ? "남" : "여";
}

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatorBirth() {
  const year = getRandomInRange(1960, 2010);
  const month = String(getRandomInRange(1, 12)).padStart(2, "0");
  const day = String(getRandomInRange(1, 28)).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function calculateAge(birthDate) {
  const now = new Date();
  const birth = new Date(birthDate);
  let age = now.getFullYear() - birth.getFullYear();

  if (
    now.getMonth() < birth.getMonth() ||
    (now.getMonth() === birth.getMonth() && now.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
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

for (let i = 0; i < 1000; i++) {
  const birthDate = generatorBirth();
  userDB.push({
    id: generatorId(),
    name: generatorName(),
    gender: generatorGender(),
    age: calculateAge(birthDate),
    birthDate: birthDate,
    address: generatorAddress(),
  });
}

console.log(userDB);

import { createObjectCsvWriter } from "csv-writer";

const csvWrite = createObjectCsvWriter({
  path: "user.csv",
  header: [
    { id: "id", title: "Id" },
    { id: "name", title: "Name" },
    { id: "gender", title: "Gender" },
    { id: "age", title: "Age" },
    { id: "birthDate", title: "BirthDate" },
    { id: "address", title: "Address" },
  ],
});

csvWrite.writeRecords(userDB).then(() => console.log("유저 데이터 저장 완료"));
