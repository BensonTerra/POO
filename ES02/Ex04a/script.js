const anoBisexto = function (ano)
{
    //console.log(num)
    let res = null
    if (isNaN(ano))
    {
        console.log("isNaN = false")
        console.log("O valor inserido deve ser numerico")
    }
    else 
    {
        if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 ==0)
        {
            res = true
        }
        else
        {
            res = false
        }
        return res
    }

}
num1 = prompt(`Insira um ano`)
if (anoBisexto(num1) == true) console.log(`O ano é bisexto`)
else console.log(`O ano não é bisexto`)