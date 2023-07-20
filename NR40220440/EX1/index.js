const table = document.getElementById('table');

function init()
{
    for(let i = 1; i <= 9; i++)
    {
        let bloco = document.getElementById(`s${i}`)
        console.log(bloco)
        bloco.addEventListener('click',blocos)
    }
}
init()

let total = 0
function blocos()
{
    let blocoN = this.id
    blocoN = blocoN.slice(1) 
    //console.log(blocoN)

    let num = parseInt(Math.random() * 10)
    //console.log(num)
    let bloco = document.getElementById(`s${blocoN}`)
    if( num > 0)
    {
        total = total + num
        console.log(total)
        bloco.innerHTML = num
        bloco.removeEventListener("click",blocos)
    }
    else
    {
        bloco.innerHTML = -1
        alert(`voce obteve ${total} pontos`)
        for(let i = 1; i <= 9; i++)
        {
            let bloco = document.getElementById(`s${i}`)
            console.log(bloco)
            bloco.removeEventListener("click",blocos)
        }
    }
}