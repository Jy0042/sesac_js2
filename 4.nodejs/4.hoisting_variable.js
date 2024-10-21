console.log(a); // var 변수는 변수 자체는 호이스팅이 되지만, 해당 값은 initialize 되지 않음

var a = 5;

console.log(a);

console.log(b); // let 변수는 호이스팅이 되지 않음, 언제나 사용전에 선언이 되어야 함

let b = 7;

console.log(b);

/*
  var는 호이스팅을 통해서 변수 선언은 되지만 변수 초기화는 안된다
  
  let은 호이스팅이 안 되어서 변수 선언이 안되고, 초기화도 안된다
*/
