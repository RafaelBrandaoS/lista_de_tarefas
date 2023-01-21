function addTarefa() {

    const tarefaText = document.querySelector("#tarefa-text").value

    if(tarefaText) {

        // clona templete
        const templete = document.querySelector(".templete")
        const novaTarefa = templete.cloneNode(true)

        // adiciona título
        novaTarefa.querySelector(".tarefas-text").textContent = tarefaText

        // remove as classes desnecessárias
        novaTarefa.classList.remove("templete")
        novaTarefa.classList.remove("hide")

        // adiciona a tarefa na lista
        const list = document.querySelector("#lista-de-tarefas")

        list.appendChild(novaTarefa)

        // adicionar o evento de remover tarefa
        const excluirBtn = novaTarefa.querySelector(".excluir-btn").addEventListener("click", function() {
            remmoverTarefa(this)
        })

        // adicionar o evento de completar tarefa
        const concluirBtn = novaTarefa.querySelector(".concluir-btn").addEventListener("click", function() {
            concluirTarefa(this)
        })

        // limpar caixa de texto
        document.querySelector("#tarefa-text").value = ""

        // alerta de erro
    } else {

        alert("Digite algo na caixa abaixo!")

    }

}

// função de remover tarefas
function  remmoverTarefa(tarefa) {

    tarefa.parentNode.remove(true)

}

// função de concluir tarefa
function concluirTarefa(tarefa) {

    const tarefaCompleta = tarefa.parentNode

    tarefaCompleta.classList.toggle("done")

}

const addBtn = document.querySelector("#add-btn")

addBtn.addEventListener("click", function(e) {

    e.preventDefault()

    addTarefa()

})