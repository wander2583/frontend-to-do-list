
const inputTarefa = document.getElementById("tarefa-nova");

let idTarefa = 0;
function adicionarTarefa() {
  const validacaoInput = () => inputTarefa.value.trim().length > 0;
  const inputEhValido = validacaoInput();

    if (!inputEhValido) {
      return;
    }
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

const botaoAdicionar = document.querySelector("#btn-adicionar");
botaoAdicionar.addEventListener("click", adicionarTarefa);

function concluir(itemId) {
  const tarefaSelecionada = document.getElementById(itemId);
  tarefaSelecionada.className = "concluida";
}
const concluirTarefa = document.getElementById(concluir);
concluirTarefa.addEventListener("click", concluir)

function excluir(itemId) {
  const apagarTarefa = document.getElementById(itemId);
  apagarTarefa.remove();
}
const excluirTarefa = document.querySelector(".excluir");
excluirTarefa.addEventListener("click", excluir);

function limparLista () {
  const lista = document.querySelector("#lista");
  lista.innerHTML = "";
}
const botaoLimpar = document.querySelector(".bt-azul");
botaoLimpar.addEventListener("click", limparLista);
