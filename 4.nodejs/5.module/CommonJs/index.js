const { add, sub, mul, div } = require("./calculator");

const sum = add(5, 3);
console.log("더셈: ", sum);

const sub = sub(10, 4);
console.log("뺄셈: ", sub);

const prod = mul(6, 7);
console.log("곱셈: ", prod);

const quot = div(20, 4);
console.log("나눗셈: ", quot);
