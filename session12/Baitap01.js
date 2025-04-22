/* Bai tap 1 Kiểm tra a có chia hết cho b*/
let a = Number(prompt("Nhập số a:"));
let b = Number(prompt("Nhập số b:"));

if (b !== 0) {
  if (a % b === 0) {
    alert("a chia hết cho b");
    console.log("a chia hết cho b");
  } else {
    alert("a KHÔNG chia hết cho b");
    console.log("a KHÔNG chia hết cho b");
  }
} else {
  alert("Không thể chia cho 0");
  console.log("Không thể chia cho 0");
}
/* Bai tap 2 Kiểm tra điều kiện vào lớp 10 (đủ 15 tuổi)*/
let age = Number(prompt("Nhập tuổi học sinh:"));
if (age >= 15) {
  alert("Đủ điều kiện vào lớp 10");
  console.log("Đủ điều kiện vào lớp 10");
} else {
  alert("KHÔNG đủ điều kiện vào lớp 10");
  console.log("KHÔNG đủ điều kiện vào lớp 10");
}
/* Bai tap 3 Kiểm tra số nguyên lớn hơn hay nhỏ hơn 0 */
let number = Number (prompt("Mời nhập số nguyên"));
if (number > 0 ) {
    alert ("Số lớn hơn 0");
    console.log("Số lớn hơn 0");}
    else if (number < 0) {
        alert("Số nhỏ hơn 0");
        console.log("Số nhỏ hơn 0");
      } else {
        alert("Số bằng 0");
        console.log("Số bằng 0");
      }
/* Bai tap 4 Tìm số lớn nhất trong 3 số nguyên */
let x = Number(prompt("Nhập số thứ nhất:"));
let y = Number(prompt("Nhập số thứ hai:"));
let z = Number(prompt("Nhập số thứ ba:"));
let max = x;
if (y > max) {
  max = y;
}
if (z > max) {
  max = z;
}
alert("Số lớn nhất là: " + max);
console.log("Số lớn nhất là: " + max);
/* Bai tap 5 Xếp loại học lực học sinh */
let test = Number(prompt("Nhập điểm bài kiểm tra:"));
let mid = Number(prompt("Nhập điểm giữa kỳ:"));
let final = Number(prompt("Nhập điểm cuối kỳ:"));
let average = (test + mid + final) / 3;
let result;
if (average >= 9) {
  result = "Xuất Sắc";
} else if (average >= 8) {
  result = "Giỏi";
} else if (average >= 6.5) {
  result = "Khá";
} else if (average >= 5) {
  result = "Trung Bình";
} else {
  result = "Yếu";
}
alert("Xếp loại học lực: " + result);
console.log("Xếp loại học lực: " + result);
