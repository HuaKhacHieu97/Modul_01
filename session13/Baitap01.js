let numbers = []; // Tạo mảng rỗng
while (numbers.length < 10) {
  // Sinh số ngẫu nhiên từ 1 đến 100
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  // Thêm số vào mảng
  numbers.push(randomNumber);
}
// Hiển thị mảng ra màn hình
console.log("Mảng gồm 10 phần tử ngẫu nhiên:");
console.log(numbers);
// Nếu dùng alert để hiển thị:
alert("Mảng gồm 10 số ngẫu nhiên:\n" + numbers.join(", "));