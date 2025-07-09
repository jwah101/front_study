// 알람창 띄우기
// alert("자바스크립트 파일 만듦");


// 출력문 - 콘솔창에 띄움 개발자 도구에
console.log("콘솔창에 내용 띄우기");

// html에 출력
document.write("문서에 쓰기")

// 변수 만들기
// var 변수이름 -> 이것도 사용 과거에
let 변수이름;

// 문자는 ' , "" 둘다 사용가능
let msg = 'hello';

console.log(msg)

msg=20;
console.log(msg)

// 상수
const COLOR = 'red';

console.log(COLOR)

let n = 12.345;

console.log(typeof(n))
console.log(typeof n )

// JS수학적 연산은 전부 처리가 됨
// 대신 결과가 안나오는 건 특수 숫자 값으로 처리
console.log(n / 0);
console.log(typeof Infinity);
console.log("abd"/2); // NaN 도 숫자취급

// 문자열에섯 쌍따옴표 , 작은따옴표, 빽틱 사용가능
let srt1 = "abd";
let srt2 = 'abc';
// 빽틱의 장점
let srt3 = `a
b
c`;

let age =20;
let name = "홍길동";

// 홍길동 님의 나이는 20살입니다.
console.log(name + "님의 나이는" + age + "살 입니다.");
console.log(`${name}님의 나이는 ${age+5}살 입니다.`);
console.log(typeof name)

//boolean

let check = true
console.log(10>=5);
console.log(typeof check)

//null
// js에서 null은 존재하지않음 , 비어있다, 알 수 없다

let a =null;

//undefined

let x;

console.log(x);

// 모달창 띄우기
// 확인버튼 1개
// alert('메세지 띄우기');

// 확인 취소 입력 가능한 메세지 , 내용 -> 내용은 초기값
// let result = Number( prompt('메세지'));

// console.log(`${result+1}`);

// confirm 메세지 띄우고 확인 취소 버튼 있음
// 확인 true / 취소 false
let re = confirm("메세지")
console.log(re)