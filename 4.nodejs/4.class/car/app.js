import Sedan from "./Sedan.mjs";
import Parent from "./Parent.mjs";
import Child from "./Child.mjs";

const familyCar = new Sedan("현대", "그랜저", "검정", 3000);
const dad = new Parent("철수", 45, "남성");
const daughter = new Child("지연", 10, "여성", "4학년");
const son = new Child("민수", 8, "남성", "2학년", "멋진사나이");

familyCar.start();
dad.getInCar(familyCar);
dad.driveCar(familyCar);
daughter.getInCar(familyCar);
son.getInCar(familyCar);
daughter.playInCar(familyCar);
son.playInCar(familyCar);
familyCar.stop();
son.sing("애국가");
