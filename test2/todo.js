"use stirct";

const todoForm = document.querySelector(".js-todoForm"),
  todoInput = todoForm.querySelector("input"),
  gridWrapper = document.querySelector(".js-wrapper");

const TODOS_LS = "todos";

let todos = [];

const ONGOING_TODO = "ongoing",
  DONE_TODO = "done";

function saveTodos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function handleDelBtn(event) {
  const btn = event.target;
  const todoContainer = btn.parentNode;
  const currentId = parseInt(todoContainer.id);
  gridWrapper.removeChild(todoContainer);

  const cleanTodos = todos.filter(function (todo) {
    return todo.id !== currentId;
  });
  todos = cleanTodos;
  saveTodos();
}

function handleCheckBtn(event) {
  const btn = event.target;
  const todoContainer = btn.parentNode;
  const currentId = parseInt(todoContainer.id);
  const currentTodo = todos.find(({ id }) => id === currentId);

  if (currentTodo.state === ONGOING_TODO) {
    currentTodo.state = DONE_TODO;
    todoContainer.classList.add(DONE_TODO);
    todoContainer.classList.remove(ONGOING_TODO);
  } else {
    currentTodo.state = ONGOING_TODO;
    todoContainer.classList.add(ONGOING_TODO);
    todoContainer.classList.remove(DONE_TODO);
  }
  saveTodos();
}

function todoContainerClassList(container, currentState) {
  if (currentState === ONGOING_TODO) {
    container.classList.add(ONGOING_TODO);
  } else {
    container.classList.add(DONE_TODO);
  }
}

function paintTodos(text, state) {
  const todoContainer = document.createElement("div");
  const checkBtn = document.createElement("button");
  const delBtn = document.createElement("button");
  const textSpan = document.createElement("span");
  const newId = todos.length + 1;

  checkBtn.classList.add("check-btn");
  checkBtn.innerText = "✓";
  checkBtn.addEventListener("click", handleCheckBtn);

  delBtn.classList.add("del-btn");
  delBtn.innerText = "✖";
  delBtn.addEventListener("click", handleDelBtn);

  textSpan.innerText = text;

  todoContainer.appendChild(checkBtn);
  todoContainer.appendChild(textSpan);
  todoContainer.appendChild(delBtn);
  todoContainer.id = newId;
  todoContainer.classList.add("todo-item");

  todoContainerClassList(todoContainer, state);
  //todoContainer.className = state;
  gridWrapper.appendChild(todoContainer);

  const todoObj = {
    text: text,
    id: newId,
    state: state,
  };
  todos.push(todoObj);
  saveTodos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  todoInput.value = "";
  paintTodos(currentValue, ONGOING_TODO);
}

function loadTodos() {
  loadedTodos = localStorage.getItem(TODOS_LS);
  if (loadedTodos !== null) {
    const parsedTodos = JSON.parse(loadedTodos);
    parsedTodos.forEach(function (todo) {
      paintTodos(todo.text, todo.state);
    });
  }
}

function init() {
  loadTodos();
  todoForm.addEventListener("submit", handleSubmit);
}
init();
