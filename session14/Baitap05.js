let studentList = [];
// Hàm thêm sinh viên mới
function addStudent() {
  let name = prompt("Nhập tên sinh viên:");
  let age = prompt("Nhập tuổi:");
  let id = prompt("Nhập mã số sinh viên (ID):");
  // Tạo đối tượng sinh viên
  let student = {
    name: name,
    age: age,
    id: id
  };
  // Thêm vào danh sách
  studentList.push(student);
  alert(" Đã thêm sinh viên thành công!");
}
// Hàm hiển thị danh sách sinh viên
function showStudents() {
  if (studentList.length === 0) {
    alert(" Danh sách sinh viên đang trống.");
    return;
  }
  let result = " Danh sách sinh viên:\n";
  for (let i = 0; i < studentList.length; i++) {
    let s = studentList[i];
    result += `${i + 1}. Tên: ${s.name}, Tuổi: ${s.age}, ID: ${s.id}\n`;
  }
  alert(result);
}
// Hàm xóa sinh viên theo ID
function deleteStudentByID() {
  let id = prompt("Nhập ID của sinh viên cần xóa:");
  let index = studentList.findIndex(student => student.id === id);
  if (index !== -1) {
    studentList.splice(index, 1);
    alert(" Đã xóa sinh viên có ID: " + id);
  } else {
    alert(" Không tìm thấy sinh viên với ID: " + id);
  }
}
// Menu lựa chọn
function showMenu() {
  let choice;
  do {
    choice = prompt(
      "=== QUẢN LÝ SINH VIÊN ===\n" +
      "1. Thêm sinh viên mới\n" +
      "2. Hiển thị danh sách sinh viên\n" +
      "3. Xóa sinh viên theo ID\n" +
      "4. Thoát\n\n" +
      "Nhập lựa chọn của bạn:"
    );
    switch (choice) {
      case "1":
        addStudent();
        break;
      case "2":
        showStudents();
        break;
      case "3":
        deleteStudentByID();
        break;
      case "4":
        alert(" Thoát chương trình.");
        break;
      default:
        alert(" Vui lòng chọn từ 1 đến 4.");
    }
  } while (choice !== "4");
}
// Bắt đầu chạy chương trình
showMenu();
