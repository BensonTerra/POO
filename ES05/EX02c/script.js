const student = 
{
    name: "John Doe",
    course: "POO",
    grade: 12
}

function getProperties(obj)
{
    console.log("versão linha por linha:")
    for (key in obj)
    {
        console.log(key)
    }
}
//getProperties(student);
//console.log("Versão simplificada: ")
//console.table(Object.keys(student));//vizualizar objetos ou listas(array)

function removeProperties(obj)
{
    console.table(obj)
    remove = prompt("key a ser removida?")
    delete obj[remove]
    console.table(obj)
}
//removeProperties(student)

function countProperties(obj)
{
    console.table(obj)
    lista = Object.keys(obj)
    console.log(lista.length)
}
countProperties(student)