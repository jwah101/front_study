// 함수 - 자바의 메서드와 똑같음

function showMsg(){
  let msg = "ㅎㅇ"

  console.log(msg)
}
// 함수 호출
showMsg();

// msg 변수는 showMsg안에있는 변수여서 바깥쪽에서 사용 못함
// console.log(msg);


let name = "홍길동";

function showInfo() {
  name = "고길동";

  let msg = `안녕하세요 ${name}님`;

  console.log(msg);
}


console.log(name);
showInfo();
console.log(name);

//매개변수와 리턴

function sum(x,y) {
  console.log(x+y);
};

sum(10,5);


function sum2 (x,y) {
  return x+y;
}

let result = sum2(10,5)

console.log(result);
