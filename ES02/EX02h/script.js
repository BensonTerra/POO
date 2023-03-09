function exercicio(num=1) 
{
    res = ""
    for (let i = 1; i <= 10; i++)
    {
        console.log(`${num} * ${i} = ${num*i}`);
        res += `${num} * ${i} = ${num*i}\n`
    }
    alert(res);
}
let num = prompt("Insira o valor da tabuada que deseja:")
exercicio(num)