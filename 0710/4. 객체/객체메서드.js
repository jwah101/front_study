// 객체에 함수넣기

let user = {
  name: "홍길동",
  age : 20
};

user.hi = () => {
  console.log(`hi`);
}

user.hi();



function hi2() {
  console.log(`hi2`);
}

user.hi2 = hi2;
user.hi2();

let user2 = {
  name : "김자바",
  age : 25,
  hi : function() {

    console.log(this.name);
  // },
  // // function 생략
  // hi2(){
  //   console.log("hi2");
  }
}

user2.hi();


// 객체 참조

let a = {
  name:"홍길동"
};

let b = a;

a.name = "김자바";

console.log(b.name);

//배열
let arr= [1,2,3,4];
arr[0]=20;
arr[1]="a";

arr.push("zzzz")

console.log(arr);