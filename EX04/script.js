start()

function start() {
    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', ready)
    } else {
        ready()
    }
}
function ready() 
{
    num = prompt("Insira um valor para numero: ")
    if (num > 0)
    {
        console.log("1:Maior que zero")
    }
    else if (num < 0)
    {
        console.log("-1:Menor que zero")
    }
    else if (num == 0)
    {
        console.log("0:Igual a zero")
    }
}