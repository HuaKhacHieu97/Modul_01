/* Bài tập 1. In dãy Fibonacci (for, while, do-while)*/
/*  let a = 0, b = 1, count = 0;
while (count < 20) {
  console.log(a);
  let temp = a + b;
  a = b;
  b = temp;
  count++;
}
  /* Bài tập 2. Tính giai thừa của một số nguyên dương */
/*  let n = parseInt(prompt("Nhập số nguyên dương:"));
let result = 1;
for (let i = 1; i <= n; i++) {
  result *= i;
}
console.log("Giai thừa của " + n + " là: " + result);
/* Bài tập 3. In tam giác vuông bằng dấu * với chiều cao là 5 */
/*  let height = 5;
for (let i = 1; i <= height; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}
/* Bài tập 4. In hình chữ nhật rỗng */
let width = 7;   
let height = 4;  
for (let i = 1; i <= height; i++) {
  let line = "";
  for (let j = 1; j <= width; j++) {
    if (i === 1 || i === height || j === 1 || j === width) {
      line += "*";
    } else {
      line += " "; 
    }
  }
  console.log(line);
}
