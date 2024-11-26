const express = require("express");
const sqlite3 = require("sqlite3");
const path = require("path");

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
  db.all(
    // `
    //   SELECT
    //     Age/10*10 AS AgeGroup,
    //     gender,
    //     COUNT(*) AS UserCount
    //   FROM
    //     users
    //   GROUP BY AgeGroup, gender
    // ;
    // `,
    `
      SELECT
            CASE
                WHEN Age BETWEEN 10 AND 19 THEN '10대'
                WHEN Age BETWEEN 20 AND 29 THEN '20대'
                WHEN Age BETWEEN 30 AND 39 THEN '30대'
                WHEN Age BETWEEN 40 AND 49 THEN '40대'
                WHEN Age BETWEEN 50 AND 59 THEN '50대'
                WHEN Age >= 60 THEN '60대이상'
            END AS AgeGroup,
            SUM(CASE WHEN Gender = '남' THEN 1 ELSE 0 END) AS MaleCount,
            SUM(CASE WHEN Gender = '여' THEN 1 ELSE 0 END) AS FemaleCount
        FROM users
        GROUP BY AgeGroup;
      `,
    [],
    (err, rows) => {
      if (err) {
        console.error("쿼리 실패");
      } else {
        // TODO 우리의 코드로 아래 내용 만든다.. 숙제!!
        const labels = [];
        const maleCount = [];
        const femaleCount = [];

        for (const row of rows) {
          labels.push(row.AgeGroup);
          maleCount.push(row.MaleCount);
          femaleCount.push(row.FemaleCount);
        }

        const chartData = {
          labels: labels,
          maleCount: maleCount,
          femaleCount: femaleCount,
        };

        console.log("데이터 가공", chartData);

        res.json(chartData);
      }
    }
  );
});

app.get("/revenue_data", (req, res) => {
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
        // console.log(rows);

        const labels = [];
        const revenues = [];
        const counts = [];

        for (const row of rows) {
          labels.push(row.YearMonth);
          revenues.push(row.MonthlyRevenue);
          counts.push(row.SoldCount);
        }

        const chartData = {
          labels: labels,
          revenues: revenues,
          counts: counts,
        };
        // console.log("데이터 가공", chartData);

        res.json(chartData);
      }
    }
  );
});

app.listen(port, () => {
  console.log("서버 레디");
});
