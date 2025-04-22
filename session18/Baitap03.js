let todos = [
    { title: "Xin việc ở Google", completed: true },
    { title: "Mua biệt thự", completed: true },
    { title: "Cưới vợ", completed: false },
    { title: "Mua xe hơi", completed: false },
    { title: "Sinh con", completed: false },
    { title: "Đi du lịch vòng quanh thế giới", completed: false }
  ];

  function renderTodos() {
    const list = document.getElementById('todoList');
    list.innerHTML = '';
    todos.forEach((todo, index) => {
      const li = document.createElement('li');
      li.className = todo.completed ? 'completed' : '';

      li.innerHTML = `
        <span class="checkmark" onclick="toggleComplete(${index})">
          ✓
        </span>
        <span ondblclick="editTodo(${index})">${todo.title}</span>
        <div class="actions">
          <button onclick="deleteTodo(${index})">Xóa</button>
        </div>
      `;
      list.appendChild(li);
    });
  }

  function addTodo() {
    const input = document.getElementById('todoInput');
    const value = input.value.trim();
    if (value !== '') {
      todos.push({ title: value, completed: false });
      input.value = '';
      renderTodos();
    }
  }

  function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
  }

  function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
  }

  function editTodo(index) {
    const newTitle = prompt("Sửa nội dung:", todos[index].title);
    if (newTitle !== null && newTitle.trim() !== '') {
      todos[index].title = newTitle.trim();
      renderTodos();
    }
  }
