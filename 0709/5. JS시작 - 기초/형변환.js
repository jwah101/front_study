// 문자로 변환
let a = true;
console.log(typeof a);
a = String(a);
console.log(typeof a);

let b = null;
console.log(typeof b);
b = String(b);
console.log(typeof b);


// 숫자로 변환

console.log("12"/"5");

let c = "123";

c = Number(c);

let d = Number("asdfsdfas");
console.log(typeof d);

// 변환 불가능한 것들은 NaN
// undefined -> NaN
// null -> 0
// true, false -> 1, 0
// 처리 순서 문자열은 양쪽 공백 제거를 먼저하고, 남는게 없으면 0
// 만약 숫자만 남으면 숫자로 되고, 숫자로 못바꾸면 NaN으로 변경

let e = Number("      123        ");

console.log(typeof e, e);


let f = Number("                ")
console.log(typeof f, f);