import { dbRunQuery, dbAllQuery } from "./5.intro_library.js";

async function runDatabaseOperations() {
  try {
    await dbRunQuery("CREATE TABLE IF NOT EXISTS message (text TEXT)");
    await dbRunQuery("INSERT INTO message(text) VALUES (?)", ["Hello, SQLite"]); // 테이블 이름을 'message'로 수정
    const rows = await dbAllQuery("SELECT * FROM message"); // 테이블 이름을 'message'로 수정
    rows.forEach((row) => {
      console.log(row);
    });
  } catch (err) {
    console.error("에러: ", err);
  }
}

runDatabaseOperations();
