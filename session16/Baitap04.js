function isEven(number) {
    return number % 2 === 0;
  }
  let input = parseInt(prompt("Nhập vào một số nguyên bất kỳ:"));
  if (isEven(input)) {
    alert("Số " + input + " là số chẵn.");
  } else {
    alert("Số " + input + " là số lẻ.");
  }
  