// SELECTORS
const todoIp = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");


// EVENT LISTENERS 

todoBtn.addEventListener("click", addingTodo);
todoList.addEventListener("click", checkDel);

//FUNCTIONS

function addingTodo(e) {
    // Prevent from submitting the form and page-refreshing
    e.preventDefault();
    // Creating "todo" Div under "todo-list"
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Creating li elements under "todo" Div
    const todoLi = document.createElement("li");
    todoLi.innerText = todoIp.value;
    todoLi.classList.add("todo-items");
    // Appending li elements with "todo" Div
    todoDiv.appendChild(todoLi);
    // Adding Buttons
    // Checked Button
    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    checkBtn.classList.add("check-btn");
    todoDiv.appendChild(checkBtn);
    // Delete Button
    const delBtn = document.createElement("button");
    delBtn.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>'
    delBtn.classList.add("del-btn");
    todoDiv.appendChild(delBtn);
    // Appending "todo" Div under "todo-list"
    todoList.appendChild(todoDiv);

    // Clearing To-Do input value
    todoIp.value = "";
}

function checkDel(e){
    const item = e.target;
    if(item.classList[0] === "del-btn"){
        let temp = item.parentElement;
        temp.classList.add("fall");
        temp.addEventListener('transitionend', function(){
            temp.remove();
        });
    }

    if(item.classList[0] === "check-btn"){
        let temp = item.parentElement;
        temp.classList.toggle("completed");
    }
}


