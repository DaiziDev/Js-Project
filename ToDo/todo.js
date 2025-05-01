

    var todoInput = document.getElementById('inputText');
    var addBtn = document.getElementById('add');
    var todoList = document.querySelector('.create-todo');

    function addTodoItem(todoText) {
       var listIcon = document.createElement('input');
       listIcon.type = 'checkbox';
       listIcon.id = 'checkboxId';
   
       var listItem = document.createElement('li');
       listItem.appendChild(listIcon);
       listItem.appendChild(document.createTextNode(todoText));
   
   
       var deleteBtn = document.createElement('button');
       deleteBtn.className = 'fa-solid fa-trash';
       deleteBtn.addEventListener('click', function() {
           listItem.remove();
       });
   
       listItem.appendChild(deleteBtn);
       todoList.appendChild(listItem);
    }

    addBtn.addEventListener('click', function() {
       var todoText = todoInput.value;
   
       if (todoText === "") {
           alert('Please Enter first a task!!');
       } else {
           addTodoItem(todoText);
           document.getElementById('inputText').value = '';
       }
    });
