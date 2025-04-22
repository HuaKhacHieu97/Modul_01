let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let userInput = parseInt(prompt("Nhập một số bất kỳ để kiểm tra:"));
if (numbers.includes(userInput)) {
  alert("🎉 Bingo! Số có trong mảng.");
} else {
  alert("😢 Chúc bạn may mắn lần sau.");
}