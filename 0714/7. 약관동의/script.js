const box = document.querySelector('.box');
const btn = document.querySelector('.btn');
const checkbox = document.querySelector('#chk');

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
  // 체크박스에 체크가 되어있을 때 true/false 여부 확인 방법
  const isCheck = checkbox.checked;

  if(!isCheck){
    alert('약관 동의에 체크하시기 바랍니다.')
  } else{
    alert('다음 페이지로 이동합니다.')
  }
})

console.log(window.innerHeight);
console.log(document.body.clientHeight)

const innerHeight = window.innerHeight;
const bodyHeight = document.body.clientHeight;


window.addEventListener('scroll', ()=>{
  console.log(window.scrollY);

  const status = window.scrollY / (bodyHeight-innerHeight)*100;
  
  document.querySelector('.status-bar').style.width = `${status}%`;
})