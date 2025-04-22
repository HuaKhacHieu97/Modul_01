let height = Number(prompt('Mời nhập chiều cao (m)'));
let weight = Number (prompt('Mời nhập cân nặng (kg)'));
let bmi = weight / (height*height);
let result = "";
 if (bmi < 18.5) {
    result = "Cân nặng thấp (Gầy)";
  } else if (bmi >= 18.5 && bmi < 23) {
    result = "Bình thường";
  } else if (bmi >= 23 && bmi < 25) {
    result = "Thừa cân";
  } else if (bmi >= 25 && bmi < 30) {
    result = "Béo phì độ I";
  } else {
    result = "Béo phì độ II";
  }
  alert("Chỉ số BMI của bạn là: " + bmi.toFixed(2) + "Phân loại: " + result);