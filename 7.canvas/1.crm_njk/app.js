import express from "express";
import sqlite3 from "sqlite3";
import nunjucks from "nunjucks";

const app = express();
const port = 3000;

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "html");

app.get("/", (req, res) => {
  const db = new sqlite3.Database("sample.db", (err) => {
    if (err) {
      console.error("파일이 없음");
    } else {
      console.log("db로딩 성공");
    }
  });

  db.all(
    `
      SELECT 
          strftime('%Y-%m', "orders"."OrderAt") AS YearMonth,
          SUM(items.UnitPrice) AS MonthlyRevenue,
          COUNT(orderitems.ItemId) AS SoldCount
      FROM 
          "orders"
      JOIN 
          "orderitems" ON "orders"."Id" = "orderitems"."OrderId"
      JOIN 
          "items" ON "orderitems"."ItemId" = "items"."Id"
      WHERE 
          "orders"."OrderAt" IS NOT NULL AND
          "orders"."OrderAt" != '' AND
          "orders"."OrderAt" >= date('now', '-1 year')
      GROUP BY 
          strftime('%Y-%m', "orders"."OrderAt")
      HAVING 
          YearMonth IS NOT NULL
      ORDER BY 
          YearMonth;
    `,
    [],
    (err, rows) => {
      if (err) {
        console.error("쿼리 실패");
      } else {
        console.log(rows);
        const labels = rows.map((row) => row.YearMonth);
        const revenues = rows.map((row) => row.MonthlyRevenue);
        const counts = rows.map((row) => row.SoldCount);
        console.log(JSON.stringify(labels));
        console.log(JSON.stringify(revenues));
        console.log(JSON.stringify(counts));

        res.render("monthly_revenue", {
          rows,
          labels: JSON.stringify(labels),
          revenues: JSON.stringify(revenues),
          counts: JSON.stringify(counts),
        });
      }
    }
  );

  // 데이터베이스 연결 닫기
  db.close((err) => {
    if (err) {
      console.error("DB 닫기 실패: ", err.message);
    } else {
      console.log("DB 닫기 성공");
    }
  });
});

app.listen(port, () => {
  console.log("서버 레디");
});
