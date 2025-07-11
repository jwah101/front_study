const darkmode = document.querySelector('.darkmode')
const body = document.body;

// 내가 만든거
// darkmode.addEventListener('click', function(){
//  if (darkmode.value == '다크모드'){
//   body.style.background = 'black';
//   body.style.color = 'white';
//   darkmode.value = '라이트모드'
//  } else if (darkmode.value == '라이트모드') {
//   body.style.background = 'white';
//   body.style.color = 'black';
//   darkmode.value ='다크모드';
//  }
// })

// 선생님 방법
let isDark = false;
darkmode.addEventListener('click', () =>{
  // 다크모드이면 true , 아니면 false
  if(isDark) {
    body.style.background = 'white';
    body.style.color = 'black';
    darkmode.value = '다크모드';
    isDark = !isDark;
  } else {
    body.style.background = 'black';
    body.style.color = 'white';
    darkmode.value = '라이트모드';
    isDark = !isDark;
  }
})