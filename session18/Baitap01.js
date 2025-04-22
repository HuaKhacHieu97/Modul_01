/* Bài tập 1 */
/*  const person = {
    name: "Nguyễn Văn A",
    age: 30,
    address: "123 Yên Hòa, Quận Cầu Giấy, Hà Nội",
    phone: "023-243-243"
};
console.log("Tên:", person.name);
console.log("Tuổi:", person.age);
console.log("Địa chỉ:", person.address);
console.log("Số điện thoại:", person.phone);*/

/* Bài tập 2 */
let students = [];
let id = prompt("Nhập ID:");
let name = prompt("Nhập tên:");
let gender = prompt("Nhập giới tính:");
let age = prompt("Nhập tuổi:");
let mark = prompt("Nhập điểm:");
let newStudent = {
  id: Number(id),
  name: name,
  gender: gender,
  age: Number(age),
  mark: Number(mark)
};
students.push(newStudent);
alert(
  "Thông tin sinh viên mới:\n" +
  "ID: " + newStudent.id + "\n" +
  "Tên: " + newStudent.name + "\n" +
  "Giới tính: " + newStudent.gender + "\n" +
  "Tuổi: " + newStudent.age + "\n" +
  "Điểm: " + newStudent.mark
);
console.log("ID:", newStudent.id);
console.log("Tên:", newStudent.name);
console.log("Giới tính:", newStudent.gender);
console.log("Tuổi:", newStudent.age);
console.log("Điểm:", newStudent.mark);
