// 요청 메서드 get , post, put, delete 등등 
// get : 어떤 정보를 가져올 때 ex) 검색 정보 가져올 때 / post : 정보 생성 ( 회원가입, 로그인)
// put : 정보를 수정 ( 회원 정보수정 등)
// delete : 정보 삭제 ( 회원 탈퇴 등)

// 통신에서 주고 받는 데이터는 전부 문자이다.
// JSON형태로 거의 대부분 주고 받음 object처럼 키와 값으로 되어 있고, 배열로도 가능함
// js에서 사용하는 배열, 오브젝르르 바로 전송하는 건 불가능하고
// 그래서 해당 데이터를 JSON으로 변환 후 전송 해야한다.
// 요청 후 응답도 JSON형태로 오고, js에서 사용하려면 배열, 오브젝트로 변환해야함

// 옛날 문법 요즘은 잘 사용하지 않음
const xhr = new XMLHttpRequest();

xhr.open("POST","https://jsonplaceholder.typicode.com/posts");

xhr.setRequestHeader("content-type","application/json");

// 밑에는 오브젝트 js에서 사용하는 것 -> JSON으로 변환 해줘야함
const data = {
  userId: 100,
  title: '비동기 통신 연습',
  body: '이것저것 보내는 중'
}

// 위에 오브젝트를 JSON형태로 변환 시키는 작업
xhr.send(JSON.stringify(data));


xhr.onload = () =>{
  console.log(xhr.status) // 응답 결과 상태 코드
  console.log(JSON.parse(xhr.response)) // 응답에 대한 데이터
}


// 요즘 꺼 기본 코드
// fetch('요청주소')
//   .then((변수) => 성공시 처리할 코드)
//   .then((변수) => 성공시 처리할 코드)
//   .catch((e) => 요청 실패시 처리할 코드)

const getBtn = document.querySelector('.get')
const postBtn = document.querySelector('.post')
const title = document.querySelector('.title')
const id = document.querySelector('.id')
const userId = document.querySelector('.userid')
const body = document.querySelector('.body')

// 서버가 요청을 받아서 보고싶은 게시글을 찾음
// DB에 접속해서 해당 게시들을 꺼내옴
// 서버가 해당 게시글 데이터를 응답 객체에 담아서 사용자한테 다시 보내줌
// 사용자 측에서 응답 데이터를 받아서 html화면에 이쁘게 뿌려짐
// /1은 게시물 번호
getBtn.addEventListener('click', ()=>{
  fetch('https://jsonplaceholder.typicode.com/posts/3')
    .then((response)=> response.json()) // parse 변환한거랑 똑같은 코드
    .then((data) => { // data안에는 parse변환된 내용이 들어간다.
      title.innerHTML = data.title;
      id.innerHTML = data.id;
      userId.innerHTML = data.userId;
      body.innerHTML = data.body;
    })
    .catch(e => {
      console.log(e);
    })
})

const post_userId = document.querySelector("[name='userId']");
const post_title = document.querySelector("[name='title']");
const post_body = document.querySelector("[name='body']");



postBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  const data = {
    userId : post_userId.value,
    title : post_title.value,
    body : post_body.value,
  };

  // post로 우리가 전송해야함으로
  fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'post', // 전송 방법
    body: JSON.stringify(data), // 그냥 오브젝트는 안되므로 JSON으로 변경 후 해야함
    headers: { // header는 오브젝트로 {} 넣어줘야함
      "content-type" : "application/json"
    }
  }).then(response => response.json()) //응답을 json으로 변경
    .then(data =>{
      console.log(data);
      alert('게시글 등록 완료');
    })
    .catch(e =>{
      console.log(e);
      alert('게시글 등록 실패')
    })
  })

  const async_test = document.querySelector('.async');

  async_test.addEventListener('click', async()=>{
    
    let a = 1;
    
    a = await fetch('https://jsonplaceholder.typicode.com/posts/3')

    console.log(a.json());
  })

function add(i){

  return new Promise(resolve => {

  })

  // for(i=0; i<10000; i++){
  // }
  // return i;
}
