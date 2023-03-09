function exercicio(...argumentos) 
{   
    //console.log(argumentos)
    total = 0
    for (let i=0; i < argumentos.length; i++)
    {
        //console.log(argumentos[i])
        total += argumentos[i]
        console.log(total)
    }
}
exercicio(1, 2, 3, 4, 5, 6, 7, 8)