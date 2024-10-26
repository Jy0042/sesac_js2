import { dir } from "console";
import path from "path";

const filePath = path.join("/Users/jy/SESAC_JS/sesac_js2/", "file.txt");
console.log("파일경로: ", filePath);

const exName = path.extname(filePath);
console.log("파일의 확장자: ", exName);

const dirName = path.dirname(filePath);
console.log("디렉토리명: ", dirName);

const fileName = path.basename(filePath);
console.log("파일명: ", fileName);
