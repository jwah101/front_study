// 객체 (object)  = 자바 Map과 유사
// key , value가 한쌍으로 구성

let user = {
  name: '홍길동',
  age : 20,
  'math score' : 100
}

console.log (user.name);
console.log(user.age);

// []안에 내용을 가져올때는 '', ""써서 출력
console.log(user["math score"]);

const member = {
  name : '홍길동',
  age : 20
}
console.log(user);

user = 10;
console.log(user);

//상수로 설정된 member는 변경 불가
//member= 10;

// 객체안의 내용을 변경 가능하지만 전체를 바꾸는 건 안된다.
member.name = "김자바";
console.log(member.name);

// 이름을 보고 싶은지 나이를 보고싶은지 입력받음
let key = "name";

//key라는 변수를 통해 가져올 수 도 있음
console.log(member[key]);


// 키로 변환
let item = "사과";

let cart = {
  [item] : 5
}

console.log(cart);

// 10명의 회원 정보 담긴 객체만들기

function makeUserObject(name, age){
  let obj = {
    // 매개변수와 key의 값이 같으면 저렇게 단순하게 작성할 수 있다. 생략가능
    // name, age = key 변수로 되어있어서 key로 출력가능하다
    name,
    age
  };

  return obj;
}

let a = makeUserObject("홍길동",20);
let b = makeUserObject("김자바", 15);

console.log(a,b);
//추가 가능
a.addr = "강동구";

console.log(a);

//키 밸류 삭제하기
delete a.addr;

console.log(a);


// 구조분해 할당?

// ...변수이름 쓰면 출력되는 {}가 사라진다
// console.log(...a);
// name : "김자바" , age:20


let {age, ...r} = a;

console.log({...r, age:30})


// 해당 값이 in "key" 있는지 없는지 찾아주는 연산자
console.log("name" in a);


for (let key in a) {
  console.log(`${key}:${a[key]}`)
}

