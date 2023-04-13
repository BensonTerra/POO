const myList = ['apple', 'banana', 'cherry', 'orange']; 

function manipulateList(array, modo)
{
    //console.log(array);
    let newList = [];
    if (modo == "reverse")
    {
        newList = array.reverse()
    }
    else if (modo == "sort")
    {
        newList = array.sort()
    }
    else if (modo == "extract")
    {
        let i = Math.floor(Math.random() * myList.length)
        let j = Math.floor(Math.random() * myList.length)
        let aux = 0
        if (i > j)
        {
            aux = i
            i = j 
            j = aux
        }
        newList = myList.splice(i, j)
    }
    console.log(newList)
}
manipulateList(myList, "reverse")
manipulateList(myList, "sort")
manipulateList(myList, "extract")