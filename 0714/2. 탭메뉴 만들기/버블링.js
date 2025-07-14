const btns = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

function clearClassList(){
    for (let i=0; i<btns.length ; i++) {
    btns[i].classList.remove('selected');
    contents[i].classList.remove('show');
}
}


document.querySelector('.list').addEventListener('click', (e) =>{
  //데이터 넘버를 저장 값을 no값에 저장해놓음
  let no = e.target.dataset.no;
  
  //이걸 해주면 빈칸을 눌러도 실행 안되게끔 해주는 것
  if(no != undefined){
  //실행전 모든 탭 지워주는 함수
  clearClassList();

  btns[no].classList.add('selected');
  contents[no].classList.add('show');
  }
})