const btn = document.querySelector('.navbar-toggler');
const list = document.querySelector('.list-group');
let isclose = true;

btn.addEventListener('click', function(){
  //true일 때 show 를 추가
  //false 일땐 제거
  // if(isclose){
  //   list.classList.add('show');
  //   isclose = !isclose
  // } else {
  //   list.classList.remove('show');
  //   isclose = !isclose
  // };

  list.classList.toggle('show');

})

// btnHide.addEventListener('click', function(){
//   document.querySelector('.list-group').classList.remove('show');
// })


const msg = document.querySelectorAll('.list-group-item');

//쿼리 셀렉트 all 은 배열방이 지정됨으로 for반복문으로 배열방을 나열하여 각각에 실행코드를 설정해줘야한다.
for(let i =0; i<=msg.length; i++){

  msg[i].addEventListener('click', function(){
      alert('ㅋㅋ');
})
};
