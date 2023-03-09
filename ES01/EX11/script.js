function echo() 
{
  let sum = 0;
  let i = 1;

  while (i < num) 
  {
    if (num % i === 0) {
      sum += i;
    }

    i += 1;
  }

  if (num === sum) 
  {
    console.log('Perfect Number');
  } 
  else 
  {
    console.log('Not a Perfect Number');
  }
}
echo()