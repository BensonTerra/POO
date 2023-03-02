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
    if (num >= 0)
    {
        console.log("positivo")
    }
    else
    {
        console.log("negativo")
    }
}