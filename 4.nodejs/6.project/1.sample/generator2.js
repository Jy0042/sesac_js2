class NameGenerator {
  constructor() {
    this.names = ["John", "Jane", "Michael", "Emily", "William", "Olivia"];
    this.lastName = ["김", "이", "박", "최", "유", "신"];
    this.firstName = ["김", "이", "박", "최", "유", "신"];
  }

  generatorName() {
    return (
      this.lastName[Math.floor(Math.random() * this.lastName.length)] +
      this.firstName[Math.floor(Math.random() * this.firstName.length)]
    );
  }
}

class GenderGenerator {
  generatorGender() {
    return Math.random() < 0.5 ? "남" : "여";
  }
}

class MyUtility {
  static getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

class BirthDateGenerator {
  generatorBirth() {
    // YYYY-MM-DD 포멧으로 반환
    // const year = Math.floor(Math.random() * (2010 - 1960 + 1)) + 1960;
    const year = MyUtility.getRandomInRange(1960, 2010);
    // const month = Math.floor(Math.random() * 12) + 1;
    const month = MyUtility.getRandomInRange(1, 12);
    // const day = Math.floor(Math.random() * 28) + 1;
    const day = MyUtility.getRandomInRange(1, 28);

    return `${year}-${month}-${day}`;
  }
}

class AddressGenerator {
  constructor() {
    this.cities = ["New York", "Los Angeles", "Chicago", "Philadelphia"];
  }

  generatorAddress() {
    // 앞에 1 ~ 100 까지의 번지수를 붙이 주소를 생성
    const street = MyUtility.getRandomInRange(1, 100);
    const city = this.cities[Math.floor(Math.random() * this.cities.length)];
    return `${street} ${city}`;
  }
}

class UserGenerator {
  constructor() {
    this.nameGen = new NameGenerator();
    this.birthGen = new BirthDateGenerator();
    this.genderGen = new GenderGenerator();
    this.addressGen = new AddressGenerator();
  }

  generateData(count) {
    const data = [];
    for (let i = 0; i < count; i++) {
      const name = this.nameGen.generatorName();
      const birthDate = this.birthGen.generatorBirth();
      const gender = this.genderGen.generatorGender();
      const address = this.addressGen.generatorAddress();
      data.push([name, birthDate, gender, address]);
    }
    return data;
  }
}

// class DataPrinter extends UserGenerator {
//   printData(count) {
//     const data = this.generateData(count);
//     for (const [name, birthDate, gender, address] of data) {
//       console.log(`이름: ${name}, 생년월일: ${birthDate}, 성별: ${gender}, 주소: ${address}`);
//     }
//   }
// }
// const dataPrinter = new DataPrinter();
// dataPrinter.printData(10);

class DataPrinter {
  constructor(data) {
    this.data = data;
  }

  printConsole() {
    for (const [name, birthDate, gender, address] of this.data) {
      console.log(`이름: ${name}, 생년월일: ${birthDate}, 성별: ${gender}, 주소: ${address}`);
    }
  }

  printHTML() {
    console.log("HTML 형태로 내보냈습니다");
  }

  writeToCsv() {
    console.log("csv파일에 저장 완료");
  }
}

const userGenerator = new UserGenerator();
const users = userGenerator.generateData(10);

const dataPrinter = new DataPrinter(users);
dataPrinter.printConsole();
dataPrinter.printHTML();
dataPrinter.writeToCsv();
