function ready() 
{
    num = prompt("Insira um numero")
    let res = `Os numeros primos entre 2 e ${num} são: `
    if (num >= 2)
    {
        console.log("Numero Valido")
        for (let i = 2; i < Number(num) + 1; i++)
        {
            console.log(i)
            if (i % 2 == 0)
            {
                
            }
        }
        console.log(res)
    }
}
ready()