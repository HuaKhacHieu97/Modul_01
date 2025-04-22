/* Bài 1. Đảo ngược và in chuỗi từ mảng */
/*  let arr = ['c', 's', 'c', '2', '6', '1'];
let reversed = arr.reverse().join('');
console.log(reversed);*/

/* Bài 2. Đếm ký tự là số trong mảng */
/*  let arr = ['a', '1', 'b', '5', '!', '8','10','c'];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (!isNaN(arr[i]) && arr[i] !== ' ') {
    count++;
  }
}
console.log(`Có ${count} ký tự là số trong mảng.`);*/

/* Bài 3. Đếm số ký tự trong một chuỗi */
/*  let str = prompt("Nhập vào một chuỗi:");
let count = str.length;
alert(`Số ký tự trong chuỗi là: ${count}`);*/

/* Bài 4. So sánh hai chuỗi */
/*  let str1 = prompt("Nhập chuỗi thứ nhất:");
let str2 = prompt("Nhập chuỗi thứ hai:");
if (str1 === str2) {
  alert("Hai chuỗi giống nhau.");
} else {
  alert("Hai chuỗi KHÔNG giống nhau.");
} */

/* Bài 5. Thay thế ký tự - bằng _ trong mảng */
let arr = ['a', '-', 'b', '-', 'c', '-'];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === '-') {
    arr[i] = '_';
  }
}
console.log(`Mảng sau khi thay thế: ${arr.join('')}`);


