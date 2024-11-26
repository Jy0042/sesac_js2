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
        SUM(items.UnitPrice) AS MonthlyRevenue
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
    ORDER BY 
        strftime('%Y-%m', "orders"."OrderAt");

    `,
    [],
    (err, rows) => {
      if (err) {
        console.error("쿼리 실패");
      } else {
        console.log(rows);
        const labels = rows.map((row) => row.YearMonth);
        const revenues = rows.map((row) => row.MonthlyRevenue);
        console.log(JSON.stringify(labels));
        console.log(JSON.stringify(revenues));

        res.render("monthly_revenue", {
          rows,
          labels: JSON.stringify(labels),
          revenues: JSON.stringify(revenues),
        });
      }
    }
  );
});

app.listen(port, () => {
  console.log("서버 레디");
});
