const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todolist = document.querySelector(".todo-list")


todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newLi = document.createElement("Li");
    const newLiInnerHTML = ` 
    <span class ="text">${newTodoText}</span>
    <div class="todo-buttons">
        <button class = "todo-btn done">Done</button>
        <button class = "todo-btn remove">Remove</button>
    </div>`;
    newLi.innerHTML = newLiInnerHTML;
    todolist.append(newLi);
    todoInput.value = "";
})

todolist.addEventListener("click", (e)=>{
    if (e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
    if (e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through"; 
    }
})