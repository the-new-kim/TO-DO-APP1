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

function handleStateBtn(event) {
  const btn = event.target;
  const todoContainer = btn.parentNode;
  const currentId = parseInt(todoContainer.id);
  const currentTodo = todos.find(({ id }) => id === currentId);

  if (currentTodo.state === ONGOING_TODO) {
    currentTodo.state = DONE_TODO;
    todoContainer.className = DONE_TODO;
  } else {
    currentTodo.state = ONGOING_TODO;
    todoContainer.className = ONGOING_TODO;
  }
  saveTodos();
}

function paintTodos(text, state) {
  const todoContainer = document.createElement("div");
  const stateBtn = document.createElement("button");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = todos.length + 1;

  stateBtn.innerText = "✓";
  stateBtn.addEventListener("click", handleStateBtn);

  delBtn.innerText = "X";
  delBtn.addEventListener("click", handleDelBtn);

  span.innerText = text;
  todoContainer.appendChild(stateBtn);
  todoContainer.appendChild(span);
  todoContainer.appendChild(delBtn);
  todoContainer.id = newId;
  todoContainer.className = state;
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
