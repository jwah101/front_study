// 화살표 함수 : 자바에 람다와 유사함
// 함수작성하는 코드를 간결하게 한다.

// function sum(a,b) {
//   return a+b;
// }

// let sum = function(a,b) {
//   return a+b;
// }

let sum = (a,b) => a+b; // 위에 코드와 똑같은 함수 return 생략해도 됨
let sum2 = (a,b) => {
  return a+b;
}

sum(10,5);
sum2(20,5);


let a = () => {
    console.log('aaaa');
}

a();