const numbers = [1,2,3,4,5] //square and cube

function manipulateNumbers(lista, modo)
{
    console.log(lista)
    let newLista = []
    if (modo == "square")
    {
        numbers.map(item => newLista.push(item**2))
    }
    else if (modo == "cube")
    {
        numbers.map(item => newLista.push(item**3))
    }
    else if (modo == "sqrt")
    {
        numbers.map(item => newLista.push(item**0.5))
    }
    console.log(newLista)
}
manipulateNumbers(numbers,"square")
manipulateNumbers(numbers,"cube")
manipulateNumbers(numbers,"sqrt")