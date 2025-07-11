const btnBoard = document.querySelector('#open');
const hideBoard = document.querySelector('#hide');
//js문법
// btnBoard.addEventListener('click', () =>{

//   // classList .add 를 사용하여 class에 추가
//   document.querySelector('.black-bg').classList.add('show')
// })

// j쿼리 문법
$('#open').on('click', () =>{
  $('.black-bg').addClass('show');
  // $('.black-bg').fadeIn();


})

// js 문법
// hideBoard.addEventListener('click', () => {
//   // document.querySelector('.black-bg') 이걸 변수에 저장해도 된다.
//   document.querySelector('.black-bg').classList.remove('show')
// })

$('#hide').on('click', () =>{
  $('.black-bg').removeClass('show');
})