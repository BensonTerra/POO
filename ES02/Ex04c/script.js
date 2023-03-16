const checkPalindro = (num) =>
{
    //console.log(num)
    if (isNaN(num))
    {
        //console.log("isNaN = false")
        console.log("O valor inserido deve ser numerico")
    }
    else 
    {
        let centenas = 0
        let unidades = 0
        centenas = Math.floor(num / 100)
        unidades = num % 10 
        if (centenas == unidades)
        {
            return true
        }
        else
        {
            return false
        }
        

    }

}
num = prompt(`Insira um ano`)
if (checkPalindro(num) == true)
{
    console.log("O valor inserido é um numero Palindro")
}
else
{
    console.log("O valor inserido não é um numero Palindro")
}
