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
    num = prompt("Insira um numero")
    for (var i = 0; i <= num; i++)
    {
        console.log(i)
    }
}