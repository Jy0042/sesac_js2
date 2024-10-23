// import readline from "readline";

var readline = require("linebyline");
var rl = readline("./example.txt");

rl.on("line", function (line, lineCount, byteCount) {
  console.log(line, lineCount, byteCount);
}).on("error", function (e) {
  console.log("어..뭔가 오류 발생", e.message);
});
