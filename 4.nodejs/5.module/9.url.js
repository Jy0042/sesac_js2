const url = require("node:url");

// const myURL = new "https://example.org/abc?foo=~bar"

const myURLObject = new URL("https://example.org/abc?foo=~bar");

// URL 파싱

// 1. 호스트명 출력
console.log(myURLObject.hostname);

// 2. 경로 출력
console.log(myURLObject.pathname);

// 3. 쿼리 파라미터 출력
console.log(myURLObject.search);
console.log(myURLObject.searchParams);

// URL 파싱 #2
// const parseURL = url.parse(myURL);
// console.log(parseURL);
// console.log(parseURL.protocol);
// console.log(parseURL.host);
// console.log(parseURL.hostname);
// console.log(parseURL.search);
// console.log(parseURL.query);

const myURL2 = {
  protocol: "https",
  hostname: "sesac.com",
  pathname: "myservice/mypath/dir1",
  query: {
    product: "hello",
  },
};

const assembleURL = url.format(myURL2);
console.log(`내 주소는: `, assembleURL);
