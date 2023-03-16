const numeroPerfeito = function (num)
{
    //console.log(num)
    if (isNaN(num))
    {
        //console.log("isNaN = false")
        console.log("O valor inserido deve ser numerico")
    }
    else 
    {
        let res = 0
        for (let i = 1; i < num; i++)
        {
            if (num % i == 0)
            {
                res += i
            }
        }
        if (res == num)
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
if (numeroPerfeito(num) == true)
{
    console.log("O valor inserido é um numero perfeito")
}
else
{
    console.log("O valor inserido não é um numero perfeito")
}
