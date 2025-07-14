const btn = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

function clearClassList(){
    for (let i=0; i<btn.length ; i++) {
    btn[i].classList.remove('selcted');
    contents[i].classList.remove('show');
}
}


for(let i=0; i<=btn.length; i++){
  btn[i].addEventListener('click', function(){
    clearClassList();

    btn[i].classList.add('selected');
    contents[i].classList.add('show');
  })
}


// <이중포문>
// for(let i=0; i<=btn.length; i++){
//   btn[i].addEventListener('click', function(){
//     for (let j=0; j<btn.length ; j++) {
//     btn[j].classList.remove('selcted');
//     contents[j].classList.remove('show');
//   }
//     btn[i].classList.add('selcted');
//     contents[i].classList.add('show');
//   })
// }
