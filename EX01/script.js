start()

function start() {
    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', ready)
    } else {
        ready()
    }
}
function ready() {
    nome = prompt("Insira seu nome: ")
    console.log(nome)
}