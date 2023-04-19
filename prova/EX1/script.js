const array1 = [1,3,2]
const array2 = [5,4,3]
const novoArray = concatenaArrays(array1, array2)

function concatenaArrays(array1, array2)//Função que permite concatinar os array
{
    array1.sort()
    array1.forEach(element => 
        {
            if (array2.includes(element))//eliminar elementos repetidos
            {
                console.log(element)
                index = array1.indexOf(element)
                console.log(index)
                array1.splice(index, 1)
                //console.table(array1)
            }
        }
    );
    //console.table(array1)
    array2.sort()
    //console.table(array2)
    let newArray = array1.concat(array2)
    console.table(newArray)
}
console.table(novoArray)
