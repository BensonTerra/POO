start()

function start() {
    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', echo)
    } else {
        echo()
    }
}
function echo() {
    nome = prompt("Insira seu nome: ")
    console.log(nome)
}