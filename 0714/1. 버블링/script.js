
// 이벤트 버블링 : 특정 태그에 이벤트가 발생되면 최상단 부모까지 이벤트가 전달됨.
// 하위 요소 태그를 이벤트를 실행해도 그걸 감싸는 상위 요소 태그도 실행시키는 것과 마찬가지
document.querySelector('.container').addEventListener('click', (e) => {
  console.log(e.target);
})

document.querySelector('b').addEventListener('click', (e)=> {
  
  //버블링을 막아주는 함수
  e.stopPropagation();
  alert('b태그 클릭');
})