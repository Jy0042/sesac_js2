function greet(name, callback) {
  const message = `안녕, ${name}`;

  callback(message);
}

function displayGreeting1(greeting) {
  console.log(greeting);
}
function displayGreeting2(greeting) {
  console.log(`<h1>${greeting}</h1>`);
}
greet("길동", displayGreeting1);
greet("길동", displayGreeting2);

function add(a, b, callback) {
  const sum = a + b;
  callback(a, b, sum);
}

function displaySum(a, b, result) {
  console.log(`두 수 ${a}, ${b} 의 합은 ${result}`);
}
add(4, 5, displaySum);
