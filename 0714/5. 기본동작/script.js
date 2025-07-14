// 기본적으로 이벤트를 수행하는 몇몇 태그들이 있다
// ex) a태그시 해당 링크로 연결
// form태그 안 input에서 뭔가 엔터를 누르면 sumit 버튼이 없어도 작동이 된다.

// 특정 이벤트를 막고자하면 이벤트 객체 필요
document.querySelector('a').addEventListener('click', (e)=>{
  // alert('네이버로 이동합니다.')
  // 기본동작 막아주는 함수
  e.preventDefault();
  console.log('aaaa')
})

//contextmenu : 우클릭시 발생하는 메뉴
document.querySelector('p').addEventListener('contextmenu', (e) =>{
  e.preventDefault();
  alert('aaaa')
})

document.querySelector('p').addEventListener('dragstart', (e) =>{
  e.preventDefault();
  alert('드래그')
})