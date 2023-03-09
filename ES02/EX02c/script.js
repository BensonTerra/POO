function echo(a,symbol,b) 
{
    if (symbol == "+")
    {
        console.log(`${a+b}`)
    }
    else if (symbol == "-")
    {
        console.log(`${a-b}`)
    }
    else if (symbol == "*")
    {
        console.log(`${a*b}`)
    }
    else if (symbol == "/")
    {
        if (b == 0)
        {
            console.log(`error: number can´t be divised by `)
            alert(`error: number can´t be divised by `)
        }
        else
        {
            console.log(`${a/b}`)
        }

    }
    
}
A = prompt("Insira valor para a: ")
Operador = prompt("Insira operador matemático desejado:")
B = prompt("Insira valor para b: ")
echo(A,Operador,B)