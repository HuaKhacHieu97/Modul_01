function laSoNguyenTo(n) {
    if (n < 2) {
        return false;
    }
    let i = 2;
    while (i <= Math.sqrt(n)) {
        if (n % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}
let so = 2; 
let dem = 0; 
console.log("20 số nguyên tố đầu tiên là:");
while (dem < 20) {
    if (laSoNguyenTo(so)) {console.log(so); dem++;} so++;}
