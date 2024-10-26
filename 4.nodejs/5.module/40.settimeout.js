function sayHello() {
  console.log("하이");
}

console.log("시작");
// sayHello();
setTimeout(sayHello, 2000);
console.log("끝");
