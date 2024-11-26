const express = require("express");
const sqlite3 = require("sqlite3");
const path = require("path");
const { reverse } = require("dns");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "revenue.html"));
});

app.get("/gender_dist_data", (req, res) => {
  const db = new sqlite3.Database("sample.db", (err) => {
    if (err) {
      console.error("파일이 없음");
    } else {
      console.log("db로딩 성공");
    }
  });
});

app.get("/revenue_data", (req, res) => {
  const db = new sqlite3.Database("sample.db", (err) => {
    if (err) {
      console.error("파일이 없음");
    } else {
      console.log("db로딩 성공");
    }
    db.all(
      `
        SELECT 
          Age/10*10 AS AgeGroup,
          gender,
          COUNT(*) AS UserCount
        FROM 
          users
        GROUP BY AgeGroup, gender
      ;
      `,
      [],
      (err, rows) => {
        if (err) {
          console.error("쿼리 실패");
        } else {
          console.log(rows);
        }
      }
    );
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

        const labels = [];
        const revenues = [];

        for (const row of rows) {
          labels.push(row.YearMonth);
          revenues.push(row.MonthlyRevenue);
        }

        const chartData = {
          labels: labels,
          revenues: revenues,
        };
        console.log("데이터 가공", chartData);

        res.json(chartData);
      }
    }
  );
});

app.listen(port, () => {
  console.log("서버 레디");
});
