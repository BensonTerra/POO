function multiplyNumeric(obj)
{
    for (let key in obj)
    {
        if(typeof obj[key] == 'number') //Verifica o tipo da variavel
        {
            obj[key] = obj[key] * 2;
        }
    }
}

// before function call
let menu = 
{
    width: 200,
    height: 300,
    title: "My menu"
}

console.table(menu);
multiplyNumeric(menu);
console.table(menu);