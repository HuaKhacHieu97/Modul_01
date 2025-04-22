let a = Number(prompt('Mời nhập số a'));
let b = Number(prompt('Mời nhập số b'));
let operator = prompt("Nhập phép tính (+, -, *, /):");
let result;
if (operator === "+") {
  result = a + b;
} else if (operator === "-") {
  result = a - b;
} else if (operator === "*") {
  result = a * b;
} else if (operator === "/") {
  if (b !== 0) {
    result = a / b;
  } else {
    result = "Lỗi: Không thể chia cho 0";
  }
} else {
  result = "Phép tính không hợp lệ!";
}

// Hiển thị kết quả
alert("Kết quả: " + result);
console.log(result);