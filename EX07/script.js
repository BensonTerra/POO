function ready() 
{
    num = prompt("Insira um numero")
    for (var i = 1; i <= num; i++)
    {
        console.log(`${num} * ${i} = ${num * i}`)
    }
}