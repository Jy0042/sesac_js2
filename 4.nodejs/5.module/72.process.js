const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("입력 인자가 없음");
} else {
  args.forEach((arg, index) => {
    console.log(`인수 ${index + 1} 은 ${arg} 임`);
  });
}
