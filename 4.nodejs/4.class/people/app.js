import Employee from "./Employee.mjs";
import Student from "./Student.mjs";

const employee = new Employee("영희", 20, "남자", "사원", 20000);
const student = new Student("철수", 33, "여자", "123456", "법학");

employee.greet("대표");
student.greet("교수");
