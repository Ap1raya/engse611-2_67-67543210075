document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    const todoList = document.getElementById("todo-list");
    const clearCompletedBtn = document.getElementById("clear-completed");
    const clearAllBtn = document.getElementById("clear-all");

    document.getElementById("todo-form").addEventListener("submit", (event) => {
        event.preventDefault();
        addTodo();
    });

    function addTodo() {
        const taskText = todoInput.value.trim();
        if (taskText === "") return;

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="complete-btn">✔️</button>
                <button class="delete-btn">🗑️</button>
            </div>
        `;

        todoList.appendChild(listItem);
        todoInput.value = "";

        listItem.querySelector(".complete-btn").addEventListener("click", () => {
            listItem.classList.toggle("completed");
        });

        listItem.querySelector(".delete-btn").addEventListener("click", () => {
            listItem.remove();
        });
    }

    clearCompletedBtn.addEventListener("click", () => {
        document.querySelectorAll(".completed").forEach(item => item.remove());
    });

    clearAllBtn.addEventListener("click", () => {
        todoList.innerHTML = "";
    });
});
