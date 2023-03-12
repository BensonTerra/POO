function fatorar(num=1)
{
    //console.log(num)
    let res = 1
    if (isNaN(num))
    {
        console.log("isNaN = false")
        console.log("O valor inserido deve ser numerico")
    }
    else 
    {
        for (let i = num; i >= 1; i--)
        {
            res = res * i
            console.log(i)
        }
        console.log(res)
    }

}
num1 = prompt(`Insira um numera a ser fatorado`)
fatorar(num1)