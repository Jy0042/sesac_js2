function gugudan() {
  for (let i = 2; i < 10; i++) {
    console.log(`\n=== ${i}단 ===`);
    for (let j = 1; j < 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}

gugudan();

function gugudan_n(dan) {
  console.log(`\n=== ${dan}단 ===`);
  for (let j = 1; j < 10; j++) {
    console.log(`${dan} x ${j} = ${dan * j}`);
  }
}

gugudan_n(5);
