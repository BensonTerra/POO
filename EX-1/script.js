function ready() 
{
  let num = parseInt(prompt('Enter your number'), 10);
  let res = ""
  for (let i = 1; i <= 10; i++)
  {
    calc = num * i
    res = res + `${num} * ${i} = ${calc}\n`
    //console.log(res)
  }
  alert(res)
}
ready()