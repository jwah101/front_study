// function on(){
//   if(document.getElementById('ab').style.display == 'block'){
//       document.getElementById('ab').style.display = 'none'
//   } else {
//     document.getElementById('ab').style.display = 'block'
//   }
// }

function showHide(state) {
  // js문법
  document.getElementById('ab').style.display = state;
  // j쿼리 문법
  $('#ab').css('display', state);
}

function show(msg) {
  //js문법
  document.querySelector('.alert').innerHTML = msg;
  //j쿼리문법
  $('.alert').html(msg)
}