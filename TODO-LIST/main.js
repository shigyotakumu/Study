

console.log("main.js loaded");

const textInput = document.getElementById("text-input");
const todolist = document.getElementById("todo-list");

// 保存用キー
const STORAGE_KEY = "todoItems";

// 配列をlocalStorageに保存する関数
function saveTodos() {
    const items = [];

    document.querySelectorAll("#todo-list .todo-text").forEach(span => {
        items.push(span.textContent);
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

// 1件のtodoを画面に追加する関数
function addTodo(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.classList.add("list-item");
    span.textContent = text;
    span.classList.add("todo-text");

    button.textContent = "削除";
    button.type = "button";
    button.classList.add("delete-button");

    button.addEventListener("click", e => {
        todolist.removeChild(e.target.closest("li"));
        saveTodos(); // 削除後に保存
    });

    li.appendChild(span);
    li.appendChild(button);
    todolist.appendChild(li);
}

// localStorageから復元する関数
function loadTodos() {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
        return;
    }

    const items = JSON.parse(saved);

    items.forEach(text => {
        addTodo(text);
    });
}

// ページ読み込み時に復元
loadTodos();

textInput.addEventListener("keydown", e => {
    const text = textInput.value.trim();

    if (e.key !== "Enter" || text === ""){
        return;
    }

    addTodo(text);
    saveTodos(); // 追加後に保存
   
   
    // const li = document.createElement("li");
    // const span = document.createElement("span");
    // const button = document.createElement("button");

    // li.classList.add("list-item");
    // span.textContent = text;
    // span.classList.add("todo-text");

    // button.textContent = "削除";
    // button.type = "button";
    // button.classList.add("delet-button");

    // button.addEventListener("click", e => {
    //     todolist.removeChild(e.target.closest("li"));
    // });

    // li.appendChild(span);
    // li.appendChild(button);
    // todolist.appendChild(li);

    textInput.value = ("");
});

