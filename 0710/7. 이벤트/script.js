// 이벤트 -> 클릭, 더블클릭, 포커스 이동, 전송, 엔터 등등

//add EventListener 함수
const btn = document.querySelector('.btn');

// 요소. addEventListener (이벤트 종류, 이벤트 핸들러);
// 요소. removeEventListener -> 삭제

btn.addEventListener('click', function(){
  alert('ㅋㅋㅋㅋㅋ');
})

// 지우는 방법은 위에처럼 매개변수에 함수를 만드는게 아니라 미리 만들어놔야 가능하다.
function handler() {
  alert('지울 수 있는 메세지');

}

btn.addEventListener('click', handler);

// 지워짐
btn.removeEventListener('click', handler);


// btn.onclick = function() {
//   alert('ㅋㅋㅋㅋㅋ');
// }

// btn.onclick = abc;

// function abc () {
//   alert('ggggg')
// };

const btn2 = document.querySelector('.btn2');

//이벤트 객체 : 이벤트 발생 시 생기는 모든 정보를 가지고 있음

btn2.addEventListener('click', function(e){
  console.log(e.type);
  console.log(e.clientX);
  console.log(e.target);
});




