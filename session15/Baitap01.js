/* Bài 1. Đếm số >=10 */
/*  let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Number(prompt(`Nhập số thứ ${i + 1}:`)));
}
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 10) {
    count++;
  }
}
alert(`Có ${count} số lớn hơn hoặc bằng 10 trong mảng.`);*/

/* Bài 2. Tìm số lớn nhất và vị trí */
/*  let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Number(prompt(`Nhập số thứ ${i + 1} (khác nhau):`)));
}
let max = arr[0];
let index = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    index = i;
  }
}
alert(`Số lớn nhất là ${max} ở vị trí thứ ${index}`);*/

/* Bài 3. Giá trị lớn nhất và trung bình */
/*  let arr = [];
let sum = 0;
for (let i = 0; i < 10; i++) {
  let num = Number(prompt(`Nhập số thứ ${i + 1}:`));
  arr.push(num);
  sum += num;
}
let max = Math.max(...arr);
let avg = sum / arr.length;
alert(`Giá trị lớn nhất: ${max}, Giá trị trung bình: ${avg}`);*/

/* Bài 4. Đảo ngược mảng */
/*  let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Number(prompt(`Nhập số thứ ${i + 1}:`)));
}
arr.reverse();
alert(`Mảng sau khi đảo ngược: ${arr}`);*/

/* Bài 5. Đếm số nguyên âm trong chuỗi */
/*  let str = prompt("Nhập vào một chuỗi các số cách nhau bởi dấu phẩy:");
let arr = str.split(",").map(Number);
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    count++;
  }
}
alert(`Có ${count} số nguyên âm trong chuỗi.`);*/

/* Bài 6. Kiểm tra số có trong mảng không */
/*  let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Number(prompt(`Nhập số thứ ${i + 1}:`)));
}
let x = Number(prompt("Nhập số cần kiểm tra:"));
if (arr.includes(x)) {
  alert(`Number ${x} is in the array`);
} else {
  alert(`Number ${x} is not in the array`);
}*/

/* Bài 7. Sắp xếp giảm dần */
/*  let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Number(prompt(`Nhập số thứ ${i + 1}:`)));
}
arr.sort((a, b) => b - a);
alert(`Mảng sau khi sắp xếp giảm dần: ${arr}`);*/

/* Bài 8. Nối hai mảng a và b thành c */
let a = [];
let b = [];
for (let i = 0; i < 10; i++) {
  a.push(Number(prompt(`Nhập phần tử a[${i}]:`)));
}
for (let i = 0; i < 10; i++) {
  b.push(Number(prompt(`Nhập phần tử b[${i}]:`)));
}
let c = a.concat(b);
alert(`Mảng c gồm 20 phần tử là: ${c}`);