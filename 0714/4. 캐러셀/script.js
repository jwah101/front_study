const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const pre = document.querySelector('.pre');
const next = document.querySelector('.next');
const carousel = document.querySelector('.carousel');

let sildeNo = 1 ;

btn1.addEventListener('click', () => {
  carousel.style.transform = 'translateX(0)'
  sildeNo=1;
})

btn2.addEventListener('click', () => {
  carousel.style.transform = 'translateX(-100vw)'
  sildeNo=2;
})

btn3.addEventListener('click', () => {
  carousel.style.transform = 'translateX(-200vw)'
  sildeNo=3;
})



// next.addEventListener('click', () => {
  
//   if(sildeNo === 1){
//     carousel.style.transform = 'translateX(-100vw)'
//     sildeNo++;
//   }else if(sildeNo===2) {
//     carousel.style.transform = 'translateX(-200vw)'
//     sildeNo++;
//   }
  
// });


// pre.addEventListener('click', () => {
//   if(sildeNo ===2){
//     carousel.style.transform = 'translateX(0vw)'
//     sildeNo--;
//   } else if(sildeNo ===3){
//         carousel.style.transform = 'translateX(-100vw)'
//     sildeNo--;
//   }
  
// })

setInterval(() => {
  
  if(sildeNo === 1){
    carousel.style.transform = 'translateX(-100vw)'
    sildeNo++;
  }else if(sildeNo === 2) {
    carousel.style.transform = 'translateX(-200vw)'
    sildeNo++;
  }else {
    carousel.style.transform = 'translateX(0vw)'
    sildeNo=1;
  }
}, 3000);

next.addEventListener('click', () => {
  //1번 보고 있을 때 2번 2번 보고 있을 때 3번으로 -100vw
  if(sildeNo >=3)
    return;

  carousel.style.transform = `translate(-${sildeNo}00vw)`
  sildeNo++;

});

pre.addEventListener('click', () => {
  if(sildeNo ===1)
    return;
  
  carousel.style.transform = `translateX(-${sildeNo-2}00vw)`
  sildeNo--;
})