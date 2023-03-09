function exercicio(limitMin, limitMax) 
{
    for (let i = limitMin; i <= limitMax;i++)
    {
        if (i % 3 === 0)
        {
            console.log(i)
        }
    }
}
min = prompt("Insira o valor para min")
max = prompt("Insira o valor para max")
exercicio(min,max)