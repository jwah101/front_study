// 실제로는 DB 또는 백엔드 서버쪽에서 보내주는 데이터
const FRUITS = [
  {name:'apple', memo: "빨갛고 맛있는 사과"},
  {name:'mango', memo: "달달하고 맛있음"},
  {name:'melon', memo: "그냥 맛있다."},
];


for(let i=0 ; i<FRUITS.length ; i++){
  let card = `
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="./image/${FRUITS[i].name}.jpg" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${FRUITS[i].name}</h5>
            <p class="card-text">${FRUITS[i].memo}</p>
            <button class="btn btn-primary cart">담기</button>
          </div>
        </div>
      </div>
`;
//beforebegin : 해당 요소 앞에 html 추가
// afterbegin : 해당 요소 첫번째 자식으로 추가
// beforeend : 해당 요소 마지막 자식으로 추가
// afterend : 해당 요소 뒤에 넣어줌
  document.querySelector('.row').insertAdjacentHTML('beforeend', card);
}

// row클래스 안쪽에 생성
// 문제로는 밑에 코드를 복붙해도 생성이 안된다.
// document.querySelector('.row').innerHTML = card;
// append는 태그로 인식을 못해서 사용 X


FRUITS.forEach((data, index) => {
  console.log(data, index);
})


// 로ㅓ컬스토리지에 저장 or 수정( 동일한 값넣으면 기존데이터 지우고 대체됨)
localStorage.setItem('키','값');
// 저장된 스토리지에 값 불러오기
localStorage.getItem('키');
// 저장된 값 삭제
localStorage.removeItem('키');

let arr = [1,2,3,4,5];

let obj = {
  name : 'kim',
  age : 20
};

// 문자열 형태로 처리된다.
localStorage.setItem('arr',arr);
localStorage.setItem('obj',obj);


// JSON형식으로 변환
// arr을 문자열로 변환 JSON으로 변환
let arr_json = JSON.stringify(arr);
console.log(arr_json, typeof arr_json);


// JSON 변환값 저장함 로컬스토리지에
localStorage.setItem('arr',arr_json);
arr = localStorage.getItem('arr');
//로컬 스토리지에서 아직 문자열
console.log(arr, typeof arr);

// 문자열에서 배열로 변경
arr = JSON.parse(arr);
console.log(arr, typeof arr);

const cart = document.querySelectorAll('.cart');

for(let i =0; i<cart.length ; i++) {
  cart[i].addEventListener('click', (e) => {
    let nameTag = e.target.previousElementSibling.previousElementSibling;
    let name = nameTag.innerHTML;

    //로컬 스토리지에 저장되어있다면 그 정보 getitem으로 가져오기
    let temp = localStorage.getItem('.cart');
    if(temp != null){
      //가져온 정보를 원본인 배열로 되돌려준다.
      temp = JSON.parse(temp);
      // 새롭게 정보를 담을 name추가
      temp.push(name);
      // temp 대괄호 넣지말자 배열로 변경했으니
      localStorage.setItem('.cart', JSON.stringify(temp));
    }else{
      localStorage.setItem('.cart', JSON.stringify([name]));
    }
    
  })
}











// const cardTitle = document.querySelectorAll('.card-body h5')
// const cardName = document.querySelectorAll('.card-body p')
// const cardImg = document.querySelectorAll('img')

// for(let i = 0; i<=FRUITS.length ; i++){
//   cardTitle[i].innerHTML = FRUITS[i].name;
//   cardName[i].innerHTML = FRUITS[i].memo;
//   // set arttibute src/url 등 속성 변경
//   cardImg[i]
//   .setAttribute('src', `./image/${FRUITS[i].name}.jpg`);
// }





