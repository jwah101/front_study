const btns = $('.tab-button');
const contents = $('.tab-content');

// (e) 이벤트 객체
btns.on('click', (e) =>{
  btns.removeClass('selected')
  contents.removeClass('show')

  //data 클래스로 내가 어떤 것을 지정했는지 확인 가능
  let on = e.target.dataset.no;

  btns.eq(no).addClass('selected');
  contents.eq(no).addClass('show');

});
