// clone notes

const ul = document.querySelectorAll(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";
const li2 = li.cloneNode(true);
// ul.append(li)
ul.prepend(li)