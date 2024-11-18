import sqlite3 from "sqlite3";

export function connectToDatabase() {
  return new sqlite3.Database("myDB.db");
}

export function queryName(db, searchName) {
  const selectQuery = "SELECT * FROM employees WHERE name = ? ";

  console.time("Query Time");

  db.all(selectQuery, [searchName], (err, row) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Result: ", row);
    }
    console.timeEnd("Query Time");
  });
}

export function queryAll(db, searchOptions) {
  let selectQuery = "SELECT * FROM employees WHERE 1=1 ";
  const queryParams = [];

  if (searchOptions.name) {
    selectQuery += "AND name = ?";
    queryParams.push(searchOptions.name);
  }

  if (searchOptions.department) {
    selectQuery += "AND department = ?";
    queryParams.push(searchOptions.department);
  }

  if (searchOptions.salary) {
    selectQuery += "AND salary = ?";
    queryParams.push(searchOptions.salary);
  }

  console.log(selectQuery);

  console.time("Query Time");

  db.all(selectQuery, queryParams, (err, rows) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("결고 :", rows);
      console.timeEnd("Query Time");
    }
  });
}
