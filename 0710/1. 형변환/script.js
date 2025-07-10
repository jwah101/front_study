// 불린 형변환
// 뭔가 존재 한다면 true > 1
// 없다는 느낌은 전부 false -> 0
let a = Boolean("0");

console.log(typeof a, a);

// 띄어쓰기도 문자로 취급하여 true / 단 ""안에 아무것도 없으면 false
a = Boolean("");
console.log(typeof a , a);

// null, nudefined , Nan 등 false
a = Boolean(null);

console.log(typeof a, a);

// 연산자 (+,-,*,/,%,**)
let x = y = z = 10+20; // 가능!

console.log(x , y, z);

//논리 연산자 (&&, || , !)

// 동등 연산자 (==)

// let re = Number(prompt('10입력'));

// console.log(re);

let num1 = 10;

// ==연산자는 : 자료형 상관없이 같다라고 연산함

// let b = Boolean (num1 == re);

// console.log(typeof b, b);

// === 연산자 : == 달리 자료형까지 일치여부 확인함