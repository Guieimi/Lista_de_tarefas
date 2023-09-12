const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeIntens = []

function adicionarNovaTarefa() {
    minhaListaDeIntens.push({
        tarefa: input.value,
        concluida: false
    })


    input.value = ''

    mostrarTarefas()
}


function mostrarTarefas() {
    let novaLi = ''

    minhaListaDeIntens.forEach((item, posicao) => {
        novaLi = novaLi + `
    
    <li class="task ${item.concluida && "done"}">
       <img src="./img/checked.png" alt="Chech-na-tela" onclick="concluirTarefa(${posicao})">
       <p>${item.tarefa}</p>
       <img src="./img/trash.png" alt="tarefa-para-o-livro" onclick="deletarItem(${posicao})">
    </li>
    
     `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeIntens))

}


function concluirTarefa(posicao) {
    minhaListaDeIntens[posicao].concluida = !minhaListaDeIntens[posicao].concluida
    mostrarTarefas()
}


function deletarItem(posicao) {
    minhaListaDeIntens.splice(posicao, 1)

    mostrarTarefas()

}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
        minhaListaDeIntens = JSON.parse(tarefasDoLocalStorage)
    }


    mostrarTarefas()
}
recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)