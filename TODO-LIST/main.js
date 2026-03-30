

console.log("main.js loaded");

const textInput = document.getElementById("text-input");
const todolist = document.getElementById("todo-list");

textInput.addEventListener("keydown", e => {
    const text = textInput.value.trim();

    if (e.key !== "Enter" || text === ""){
        return;
    }

   
   
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.classList.add("list-item");
    span.textContent = text;
    span.classList.add("todo-text");

    button.textContent = "削除";
    button.type = "button";
    button.classList.add("delet-button");

    button.addEventListener("click", e => {
        todolist.removeChild(e.target.closest("li"));
    });

    li.appendChild(span);
    li.appendChild(button);
    todolist.appendChild(li);

    textInput.value = ("");
});

