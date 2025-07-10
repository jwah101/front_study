const darkmode = document.querySelector('.darkmode')
const body = document.body;

darkmode.addEventListener('click', function(){
 if (darkmode.value == '다크모드'){
  body.style.background = 'black';
  body.style.color = 'white';
  darkmode.value = '라이트모드'
 } else if (darkmode.value == '라이트모드') {
  body.style.background = 'white';
  body.style.color = 'black';
  darkmode.value ='다크모드';
 }
})