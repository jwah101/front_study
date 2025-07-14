// mousedown / mouseup, dbclick, mouseover, mouseout 등등

document.querySelector('button')
// 왼쪽 클릭시 0 / 가운데 1 / 오른쪽 2
.addEventListener('click', (e) => {
  console.log(e.button);
  console.log(e.altKey)
  console.log(e.ctrlKey)
  console.log(e.shiftKey)

  console.log(e.clientX, e.clientY);
  console.log(e.pageX,e.pageY)
  
  if(e.ctrlKey){
  alert('컨트롤 클릭')
}

if(e.ctrlKey&&e.shiftKey){
  alert('컨트롤 쉬프트 클릭')
}

})


// change - 커서가 변경되는 순간 / input  - 하나하나 입력할 때 마다
// cut - 잘라내기 했을 떄 / copy  / paste  복붙 했을 때
document.querySelector('input').addEventListener('cut', () =>{
  alert('change 이벤트 발동')
})