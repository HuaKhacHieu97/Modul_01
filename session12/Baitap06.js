let name = "";
let age = 0;

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

while (true) {
  let choice = prompt(
    "=== MENU ===\n" +
    "1. Nhập tên người dùng\n" +
    "2. Nhập tuổi người dùng\n" +
    "3. In tên và tuổi\n" +
    "4. In bảng cửu chương của một số\n" +
    "5. Kiểm tra số chẵn hay lẻ\n" +
    "6. Tính tổng từ 1 đến N\n" +
    "7. In các số trong một dãy\n" +
    "8. Kiểm tra số nguyên tố\n" +
    "9. Đảo ngược chuỗi\n" +
    "10. Thoát\n\n" +
    "Nhập lựa chọn của bạn (1-10):"
  );
  switch (parseInt(choice)) {
    case 1:
      name = prompt("Nhập tên của bạn:");
      break;
    case 2:
      age = parseInt(prompt("Nhập tuổi của bạn:"));
      break;
    case 3:
      alert("Tên: " + name + "\nTuổi: " + age);
      break;
    case 4:
      let number = parseInt(prompt("Nhập số để in bảng cửu chương:"));
      let table = "";
      for (let i = 1; i <= 10; i++) {
        table += `${number} x ${i} = ${number * i}\n`;
      }
      alert(table);
      break;
    case 5:
      let num = parseInt(prompt("Nhập một số:"));
      if (num % 2 === 0) {
        alert(num + " là số chẵn.");
      } else {
        alert(num + " là số lẻ.");
      }
      break;
    default:
      alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
  }

  if (choice == 10) break; // Thoát khỏi vòng lặp
}