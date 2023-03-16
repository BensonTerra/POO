function game()
{   
    let num = 0
    let tentativas = 3
    //console.log(num)
    if (isNaN(num))
    {
        //console.log("isNaN = false")
        console.log("O valor inserido deve ser numerico")
    }
    else 
    {
        let randomNumber = Math.floor(Math.random() * 100 + 1)
        console.log(randomNumber)
        while (tentativas != 0)
        {
            let num = prompt(`Insira um numero`)
            if (num < randomNumber)
            {
                alert(`Numero é maior do o digitado,tentativa restantes = ${tentativas}`)
                tentativas-=1
            }
            else if (num > randomNumber)
            {
                alert(`Numero é menor do o digitado,tentativa restantes = ${tentativas}`)
                tentativas-=1
            }
            else
            {
                alert(`Parabens você venceu com ${tentativas} tentativa restantes`)
                break

            }
        }
    }

}
game()