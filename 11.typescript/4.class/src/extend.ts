interface BasicInfo {
  name: string;
  age: number;
}

interface ContactInfo {
  email: string;
  phone: string;
}

interface Employee extends BasicInfo, ContactInfo {
  employeeId: number;
}

const employee1: Employee = {
  name: "Bob",
  age: 30,
  email: "bob@bob.com",
  phone: "123-456-7890",
  employeeId: 123,
};

console.log(
  `직원 정보: ${employee1.name}, ${employee1.age}, ${employee1.email}, ${employee1.phone}`
);
