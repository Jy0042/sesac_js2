import { connectToDatabase, queryName, queryAll } from "./queryTime.js";

const db = connectToDatabase();

const searchName = "정다사";

// queryName(db, searchName);

const searchDetail = {
  // name: "정다사",
  department: "HR",
  salary: 60000,
};

queryAll(db, searchDetail);

db.close();
