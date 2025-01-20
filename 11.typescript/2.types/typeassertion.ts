// as 문법
let someValue: any = "Hello, TypeScript";
let strLength: number = (someValue as string).length;
console.log(`문자열의 길이는: ${strLength}`);

// angle-bracket <> 문법 = jsx 문법이랑 겹침.. 그래서 react 같은데서는 비추
let stringLength2: number = (<string>someValue).length;
console.log(`문자열의 길이는: ${stringLength2}`);
