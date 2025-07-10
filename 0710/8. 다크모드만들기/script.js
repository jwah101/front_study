const darkmode = document.querySelector('.darkmode')
const body = document.body;

darkmode.addEventListener('click', function(){
alert(darkmode.value)
  
body.style.background = 'gray';
body.style.color = 'white';
})