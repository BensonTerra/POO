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
getProperties(student);
console.log("Versão simplificada: ")
console.table(Object.keys(student));//vizualizar objetos ou listas(array)