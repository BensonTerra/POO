start()

function start() {
    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', echo)
    } else {
        echo()
    }
}
function echo() {
    num1 = prompt("Insira um valor para numero 1: ")
    num2 = prompt("Insira um valor para numero 2: ")
    total = Number(num1) + Number(num2)
    console.log(`A soma dos numeros inseridos é igual a ${total}`)
}