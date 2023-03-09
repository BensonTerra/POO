start()

function start() {
    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', echo)
    } else {
        echo()
    }
}
function echo() 
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