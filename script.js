const inputTarefa = document.querySelector("tarefa-nova")
const lista = document.querySelector("tarefa-nova")

const validar = () => inputTarefa.value.trim().length > 0;

const adicionar = () => {
  const ehValido = validar();
  console.log(ehValido);

  if (!ehValido) {
    return inputTarefa.classList.add("erro");
  }
};

const alterarInput = () => {
  const ehValido = validar();
  if (ehValido) {
    return inputTarefa.classList.remove("erro");
  }
};

lista.addEventListener("click", () => adicionar());
inputTarefa.addEventListener("change", () => alterarInput());
/*
let idTarefa = 0
const adicionarTarefa = () => {
  const item = document.createElement("li") 
  item.innerHTML = 
    `<span>${inputTarefa.value}</span>
    <button class="excluir">x</button>`
 
  lista.appendChild(item)

  inputTarefa.value = ""
  idTarefa++;
  item.id = idTarefa;
}

document
  .querySelector("#btn-adicionar")
  .addEventListener("click", adicionarTarefa)
  

  function concluir(itemId) {
    const tarefaSelecionada = document.getElementById(itemId);
    tarefaSelecionada.className = "concluida";
    item.innerHTML = `
      <span onclick="concluir(${idTarefa})">${inputTarefa.value}</span>
      <button class="excluir" onclick="excluir(event)">x</button>
    `;
}

const botaoLimpar = document.querySelector(".bt-azul");

botaoLimpar.addEventListener("click", function (event){
  const lista = document.querySelector("#lista")
  lista.innerHTML = "";
} )

*/