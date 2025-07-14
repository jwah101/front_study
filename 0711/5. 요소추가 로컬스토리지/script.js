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
  // 이벤트 객체 사용 하여 정보를 저장한다. (e)로 만들어서 e.target에 저장해준다.
  cart[i].addEventListener('click', (e) => {
    let nameTag = e.target.previousElementSibling.previousElementSibling;
    //태그를 제외한 내용만 가져오는 명령어 .innerHTML
    let name = nameTag.innerHTML;

    //로컬 스토리지에 저장되어있다면 그 정보 getitem으로 가져오기
    let temp = localStorage.getItem('.cart');
    

    // 장바구니에 넣으려는 과일이 로컬스토리지에 있는지 알려주는 변수
    let isHave = false;

    //장바구니에 넣으려는 과일이 로컬스토리지에 있으면
    //몇번째 인덱스에 있는지 알려주는 변수
    let index;


    if(temp != null){
      //가져온 정보를 원본인 배열로 되돌려준다.
      temp = JSON.parse(temp);


      temp.forEach((data, i) =>{
        if(data.name === name){
          isHave = true;
          index = i;
        }
      })

      // 위 반복문에서 기존 로컬스토리지에 해당 과일이 있는지 없는지
      // 검사를 끝냈으므로 여부에 따라 다르게 처리
      if(isHave){
        temp[index].cnt++;
      } else{
        temp.push({'name':name, 'cnt':1});
      }
      // // 새롭게 정보를 담을 name추가 push 명령어로 정보를 추가
      // temp.push(name);
      // temp 대괄호 넣지말자  배열로 변경했으 로컬스토리지에 넣을때 다시 문자열로 변경해야함.
      localStorage.setItem('.cart', JSON.stringify(temp));
    }else{
      // [] 넣어준 이유는 name 자체는 문자열이기 때문에 []넣어줌으로써 배열 형태로 변환시킨다. 

      // 해당 과일이 없을 때가 아니라, 로컬스토리지 자체가 비어있을때
      localStorage.setItem('.cart', 
        JSON.stringify([{'name' : name, 'cnt':1}])
      );
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





