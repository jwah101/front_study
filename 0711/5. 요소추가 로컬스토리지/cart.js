// 로컬스토리지에 있는 정보 가져오고 배열로 변환
let cart = JSON.parse(localStorage.getItem('.cart'));
console.log(cart);

const cartList = document.querySelector('.list');

cart.forEach((item) => {

  //. naem , .cnt 추가해서 그 결과물 보여주기
  cartList.insertAdjacentHTML('beforeend',
    `<div>${item.name} : ${item.cnt}</div>`)
})