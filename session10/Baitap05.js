let usdAmount = Number (prompt("Nhập số tiền Đô la Mỹ (USD):"));
const tigia = 25000;
let vndAmount = usdAmount * tigia;
alert(usdAmount + " USD = " + vndAmount.toLocaleString() + " VND");