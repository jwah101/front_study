// 조건 문
// if

let age = 5;

if(age>=20){
  console.log('성인');
}else if(age>=12){
  console.log("청소년");
}else{
  console.log("어린이")
}

// 삼항 연산자
// 조건식 ? 참 : 거짓

let re = age >= 20 ? "성인" : "청소년";

// switch 문

// let a = Number(prompt("숫자입력"));

// switch(a){
//   case 1:
//     console.log("a는 1이다")
//     break;
//   case 2:
//     console.log("a는 2이다")
//     break;
//   default :
//   console.log("a는 1, 2가 아니다")
// }

// 반목문
// for문 for(초기값; 조건식 ; 증감식)
let sum = 0;

for(let i = 1 ; i<=10 ; i++) {
  sum = sum+i
};
console.log(sum);

let sum2 = 0;
for(let i = 1 ; i<=10; i++){
  let sum3 = 0;
  for(let y = 1 ; y<=i ; y++){
    sum3 = sum3+y
  }
  sum2 = sum2+sum3
} 

let sum4 =0;
for(let i=1;i<=10;i++){
  sum4 = sum4+i
  sum2 = sum2+sum4
};

console.log(sum2);



//  while문

// while(조건식){
// } break;
// 반복 돌아가기 continue


