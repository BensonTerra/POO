const salaries = 
{
    John: 100,
    Ann: 160,
    Pete: 130
}
function totalSalaries(salaries)
{
    let total = 0;
    for(let key in salaries)
    {
        total += salaries[key];
    }
    console.log(total);
}
totalSalaries(salaries)