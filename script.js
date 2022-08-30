const inputTarefa = document.getElementById("tarefa-nova");
let idTarefa = 0;

function concluir(itemId) {
  const tarefaSelecionada = document.getElementById(itemId);
  tarefaSelecionada.className = "concluida";
}

function adicionarTarefa() {
  const item = document.createElement("li");
  
  item.innerHTML = `
  <span onclick="concluir(#{idTarefa})">${inputTarefa.value}</span>
  <button class="excluir" onclick="(event)">x</button>
  `;

  idTarefa++;
  item.id = idTarefa;

  const lista = document.querySelector("#lista");
  lista.appendChild(item);

  inputTarefa.value = "";
}
const botaoAdicionar = document.querySelector("#btn-adicionar")
botaoAdicionar.addEventListener("click", adicionarTarefa);

function limparLista () {
  const lista = document.querySelector("#lista");
  lista.innerHTML = "";
}

const botaoLimpar = document.querySelector(".bt-azul");
botaoLimpar.addEventListener("click", limparLista);



/*
const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const tasksContainer = document.querySelector(".tasks-container");

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
  const inputIsValid = validateInput();

  if (!inputIsValid) {
    return inputElement.classList.add("error");
  }

  const taskItemContainer = document.createElement("div");
  taskItemContainer.classList.add("task-item");

  const taskContent = document.createElement("p");
  taskContent.innerText = inputElement.value;

  taskContent.addEventListener("click", () => handleClick(taskContent));

  const deleteItem = document.createElement("i");
  deleteItem.classList.add("far");
  deleteItem.classList.add("fa-trash-alt");

  deleteItem.addEventListener("click", () => handleDeleteClick(taskItemContainer, taskContent));

  taskItemContainer.appendChild(taskContent);
  taskItemContainer.appendChild(deleteItem);

  tasksContainer.appendChild(taskItemContainer);

  inputElement.value ="";

  updateLocalStorage();

};

const handleClick = (taskContent) => {
    const tasks = tasksContainer.childNodes;

    for (const task of tasks) {
      const currentTaskIsBeginClicked = task.firstChild.isSameNode(taskContent);
      if (currentTaskIsBeginClicked) {
        task.firstChild.classList.toggle("completed")
    }
  }

  updateLocalStorage();
};

const handleDeleteClick = (taskItemContainer, taskContent) => {
  const tasks = tasksContainer.childNodes;

  for (const task of tasks) {
    const currentTaskIsBeginClicked = task.firstChild.isSameNode(taskContent);
    if (currentTaskIsBeginClicked) {
      taskItemContainer.remove();
    }
  }

  updateLocalStorage();
};

const handleInputChange = () => {
  const inputIsValid = validateInput();

  if (inputIsValid) {
    return inputElement.classList.remove("error");
  }
};

const updateLocalStorage = () => {
  const tasks = tasksContainer.childNodes;

  const localStorageTask = [...tasks].map((task) => {
    const content = task.firstChild;
    const isCompleted = content.classList.contains("completed");

    return { description: content.innerText, isCompleted };
  });

  localStorage.setItem("tasks", JSON.stringify(localStorageTask));
};

const refreshTasksUsingLocalStorage = () => {
  const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));

  if (!tasksFromLocalStorage) return;

  for (const task of tasksFromLocalStorage) {
  const taskItemContainer = document.createElement("div");
  taskItemContainer.classList.add("task-item");

  const taskContent = document.createElement("p");
  taskContent.innerText = task.description;

  if (task.isCompleted) {
    taskContent.classList.add("completed");
  }

  taskContent.addEventListener("click", () => handleClick(taskContent));

  const deleteItem = document.createElement("i");
  deleteItem.classList.add("far");
  deleteItem.classList.add("fa-trash-alt");

  deleteItem.addEventListener("click", () => handleDeleteClick(taskItemContainer, taskContent));

  taskItemContainer.appendChild(taskContent);
  taskItemContainer.appendChild(deleteItem);

  tasksContainer.appendChild(taskItemContainer);
  }
};

refreshTasksUsingLocalStorage();

addTaskButton.addEventListener("click", () => handleAddTask());
inputElement.addEventListener("change", () => handleInputChange());

*/