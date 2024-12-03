import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(process.cwd(), "build")));

app.listen(3000, () => {
  console.log("server ready");
});
