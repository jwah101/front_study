// 함수 선언문
function hello() {
  console.log("hello");
};

// 함수 표현식

let hi = function() {
  console.log('hi')
}

hi();


// 콜백 함수

function yes() {
  console.log("예")
}

let no = function() {
  console.log("아니오");
}

function check(question, ok, cancle) {
  if(question === 'y')
    ok();
  else
    cancle();
}

check('y',yes,no)


// -==============================================
function buy(item, price, stock, callback){
  console.log(`${item} ${stock}개 구매`)

  let total = price * stock;

  callback(total);

}

function pay(n) {
  console.log(`총 금액 : ${n}`);
}

function pay2(n) {
  console.log(`총금액(할인적용)${n*0.9}`);
}

let 할인적용여부 = 'n'

if(할인적용여부 === 'y') {
  buy("컴퓨터", 100, 2, pay2);
} else {
  buy("컴퓨터", 100, 2, pay)
}

// 함수 넣고, 시간 넣기 시간은 ms임 1000=1초 코드 반복실행
// 
setInterval(hello, 1000);
setInterval(function(){
  console.log('aa');
}, 1000);

