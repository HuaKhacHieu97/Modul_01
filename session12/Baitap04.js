/* Bài tập 1. Đếm từ 1-100, thông báo khi đến 99 */
/*  for (let i=1; i<=100; i++) {
    console.log(i); if (i===99) {
        alert ("Đã hoàn thành");
    }
}
/* Bài tập 2. Kiểm tra nhiệt độ */
 /*  let temp = prompt ("Nhập nhiệt độ");
if (temp===100) {
    alert ("Nhiệt độ cao nguy hiểm");
} else if (temp<40){
    alert ("Nhiệt độ thấp, nâng cao nhiệt độ");
} else {
    alert ("Nhiệt độ ổn định");
} 
/* Bài tập 3. 20 số Fibonacci đầu tiên */
/*  let a=0, b=1 ;
for (let i=0; i<20; i++) {
console.log (a);
let temp = a+b;
a=b;
b=temp;
}
/* Bài tập 4. Số đầu tiên trong dãy Fibonacci chia hết cho 5 */
/*  let a=0, b=1 ;
for (let i=0; i<20; i++) {
    console.log (a);
    let temp = a+b;
    a=b;
    b=temp;
if (temp % 5===0) {
    console.log (" Số Fibonacci đầu tiên chia hết cho 5 là:" + temp);
    break;
}
}
/* Bài tập 5. Tổng 20 số Fibonacci đầu tiên */
/*  let a = 0, b = 1, sum = 0;
for (let i = 0; i < 20; i++) {
  sum += a;
  let temp = a + b;
  a = b;
  b = temp;
}
console.log("Tổng là: " + sum);
/* Bài tập 6. Tổng 30 số chia hết cho 7 đầu tiên */
/*  let count = 0, sum = 0, i = 0;
while (count < 30) {
  if (i % 7 === 0) {
    sum += i;
    count++; } i++; }
console.log("Tổng 30 số chia hết cho 7 đầu tiên: " + sum);
/* Bài tập 7.FizzBuzz */
/*  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  /* Bài tập 8. Game đoán số Nâng cấp game "Hãy thử đoán xem!" */
  function startGame() {
    let min = parseInt(prompt("Nhập số nhỏ nhất trong khoảng đoán:"));
    let max = parseInt(prompt("Nhập số lớn nhất trong khoảng đoán:"));
    if (isNaN(min) || isNaN(max) || min >= max) {
      alert("Khoảng không hợp lệ!");
      return;
    }
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let guess;
    while (true) {
      guess = parseInt(prompt("Đoán số trong khoảng " + min + " đến " + max + ":"));
      if (guess === randomNumber) {
        alert("Chúc mừng! Bạn đã đoán đúng!");
        break;
      } else if (guess > randomNumber) {
        alert("Số bạn đoán lớn hơn!");
      } else {
        alert("Số bạn đoán nhỏ hơn!");
      }
    }
  }
