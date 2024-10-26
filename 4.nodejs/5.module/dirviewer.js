const fs = require("fs");

const directoryPath = "./";

fs.readdir(directoryPath, (err, data) => {
  if (err) throw err;
  console.log(data);
});
