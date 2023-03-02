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
    num = prompt("Insira um valor da sua nota")
    if (num >=10 && num <= 20)
    {
        console.log("Positiva")
    }
    else if (num >= 7 && num < 10)
    {
        console.log("unknown")
    }
    else if (num >= 0 && num < 7)
    {
        console.log("negativa")
    }
    else
    {
        console.log("nota invalida")
    }
}