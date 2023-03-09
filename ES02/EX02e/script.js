function echo(texto,rep) 
{
    let res = ""
    for (let i = 0; i < rep; i++)
    {
        res = res + texto
    }
    console.log(res)
}
texto = prompt("Insira um texto: ")
rep = prompt("Numero de vezes para repetir: ")
echo(texto,rep)