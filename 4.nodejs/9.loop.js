let j = 0;
while (j < 5) {
  console.log(`while 구문: ${j}`);
  j++;
}

let k = 0;
do {
  console.log(`do-while 구문: ${k}`);
  k++;
} while (k < 5);

for (let i = 0; i < 10; i++) {
  {
    console.log(`for 구문: ${i}`);
    if (i == 3) {
      break;
    }
  }
}

for (let i = 0; i < 10; i++) {
  if (i == 3) {
    continue;
  }
  console.log(`for 구문: ${i}`);
}
