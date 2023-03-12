function checkPrime(num, b)
{
    let primo = true
    if (isNaN(num))
    {
        console.log("isNaN = false")
        console.log("O valor inserido deve ser numerico")
    }
    else 
    {
        for (let i = 2; i < num; i++)
        {
            if (num % i == 0)
            {
                primo = false
            }
        }
        if (primo == true)
        {
            alert(`O numero ${num} é primo`)
        }
        else
        {
            alert(`O numero ${num} não é primo`)
        }
    }

}
num1 = prompt(`Insira valor para ser verificado`)
checkPrime(num1)