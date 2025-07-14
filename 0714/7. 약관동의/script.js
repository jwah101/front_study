const box = document.querySelector('.box');
const btn = document.querySelector('.btn');

const check = document.querySelector('#checkbox');

//스크롤 포함 전체 높이
let boxY = box.scrollHeight;
console.log(boxY);


//실제 박스 사이즈
let boxHeight = box.clientHeight;
console.log(boxHeight)

let isDisabled = true;

//스크롤 함수로 위에서부터 스크롤 높이 측정하기
box.addEventListener('scroll', () =>{
  let scroll = box.scrollTop;
  
  if(isDisabled&&boxHeight + scroll > boxY-1) {
    document.querySelector('#chk'). disabled = false;
    isDisabled = false;
  }
})

btn.addEventListener('click',() => {
  if(!check.checked){
    alert('약관 동의에 체크하시기 바랍니다.')
  } else{
    alert('다음 페이지로 이동합니다.')
  }
})