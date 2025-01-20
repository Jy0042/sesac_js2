interface Calculate {
  (a: number, b: number): number;
}

const add: Calculate = (a, b) => a + b;
console.log(add(10, 20));

const sub: Calculate = (a, b) => a - b;
console.log(sub(10, 20));

const mul: Calculate = (a, b) => a * b;
console.log(mul(10, 20));

const div: Calculate = (a, b) => a / b;
console.log(div(10, 20));
