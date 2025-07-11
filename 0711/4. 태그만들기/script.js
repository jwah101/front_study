// js 태그 생성
let div = document.createElement('div');

div.className = 'box';
div.innerHTML = "<b class = 'aaaaa'>div 태그</b> 만듦"

document.body.append(div);


// 요소.append() : 해당 요소 안쪽 마지막에 추가. 하위요소에 추가된다고 생각하면 됨
// 요소.prepend() : 해당 요소 안쪽 첫번째에 추가
// 요소.before() : 해당 요소 바로 전에 추가
// 요소.after() : 해당요서 바로 후에 추가


const ulTag = document.querySelector('.list');

let pTag = document.createElement('p');

pTag.innerHTML = "앞에 들어갈 p태그";

ulTag.before(pTag);
// ulTag.after(pTag);

let liTag = document.createElement('li');

liTag.innerHTML = "새로 생성한 li 태그";

// ulTag.append(liTag);
ulTag.prepend(liTag);

//삭제 기능
liTag.remove();

