const box = document.getElementById('box');

box.style.background = 'red';

console.log(box);


// 선택자를 활용해서 요소 선택
const box2 = document.querySelector('#box');
box2.style.color = 'white'


//선택자의 해당 요소중 첫번째거 단 1개만 가져옴 단점
// const bg = document.querySelector('.bg');

// bg.style.background = 'pink';

// all로 가져오기 모든여서
const bg = document.querySelectorAll('.bg');

// 배열방을 선택하여 변경해야한다.
// bg[0].style.background = 'pink';
// bg[1].style.background = 'pink';

//배열방으로 되어있기때문에 반목문으로 모든 요소 동시 적용
// for(let i=0; i<bg.length; i++){
//   bg[i].style.background = 'aqua';
// }

for(let b of bg){
  b.style.background = 'pink';
}

// class를 지정하지 않았을 경우
// 태그를 이용
const li = document.querySelectorAll('ul>li');

//innerHTML은 해당 내용을 변경하는 것
for (let l of li){
  l.innerHTML = 'zzzz';
}
