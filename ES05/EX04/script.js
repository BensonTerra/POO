function isEmpty(obj)
{
    if(Object.keys(obj).length === 0)//captura todas as propriedades do objeto
    {
        console.log("True");
    }
    else
    {
        console.log("False");
    }
}

const schedule = {};
alert(isEmpty(schedule)); // true
schedule['8:30'] = 'get up';
alert(isEmpty(schedule)); // false