let products = [
    { id: 1, name: 'Milk', count: 100 },
    { id: 2, name: 'Orange', count: 100 },
    { id: 3, name: 'Butter', count: 100 }
  ];
  
  // Thêm sản phẩm mới
  let newProduct = { id: 4, name: 'Cheese', count: 50 };
  products.push(newProduct); 
  
  //  Xóa sản phẩm có id là 2
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === 2) {
      products.splice(i, 1);
      break; 
    }
  }
  
  // Cập nhật count = 0 cho sản phẩm có id là 3
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === 3) {
      products[i].count = 0;
      break;
    }
  }
  // Kiểm tra sản phẩm có tên là "Butter"
  let found = false;
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === 'Butter') {
      found = true;
      console.log("Tìm thấy sản phẩm:");
      console.log("ID:", products[i].id);
      console.log("Tên:", products[i].name);
      console.log("Số lượng:", products[i].count);
      break;
    }
  }
  // không tìm thấy
  if (!found) {
    console.log("Không có dữ liệu bạn tìm kiếm");
  }