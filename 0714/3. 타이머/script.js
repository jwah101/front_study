// 정해진 시간이 흐른뒤 코드가 작동 되도록 하는 함수

// 5초 뒤에 콜백 함수가 실행
console.log('js 로드 완료')

const count = document.querySelector('.count');

let t = 5;

// 정해진 시간이 흐른뒤 코드가 반복함
const interval = setInterval(() => {

  t--;
  count.innerHTML = t;
  console.log(t);
}, 1000);


setTimeout(() => {
  document.querySelector('.alert').style.display = "none";  
  clearInterval(interval)
}, 5000);


let timer;

document.querySelector('.btn').addEventListener('click', () =>{
  
  clearTimeout(timer)
  timer = setTimeout(() => {
    console.log('버튼 누르면 2초뒤에 나타남')   
  }, 2000);
  

})





//날짜 관련 함수
const clock = document.querySelector('.clock');

  const date = new Date();
  const hour = String(date.getHours()).padStart(2,0);
  const minute = String(date.getMinutes()).padStart(2,0);
  const second = String(date.getSeconds()).padStart(2,0);

  clock.innerHTML = `${hour}시 ${minute}분 ${second}초`

setInterval (()=>{
  const date = new Date();
  const hour = String(date.getHours()).padStart(2,0);
  const minute = String(date.getMinutes()).padStart(2,0);
  const second = String(date.getSeconds()).padStart(2,0);


  clock.innerHTML = `${hour}시 ${minute}분 ${second}초`
},1000);



console.log (date)

//연도 추출
console.log(date.getFullYear());

//월 추출 단, 0~11월로 시작
console.log(date.getMonth());

// 일 추출
console.log(date.getDate());

// 요일 추출 0(일)~6(토)
console.log(date.getDay());

//시간
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

