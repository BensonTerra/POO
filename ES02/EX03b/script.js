function pow(a, b)
{
    if (isNaN(a) || isNaN(b))
    {
        //console.log("isNaN = false")
        console.log("As entradas devem ser numericas")
    }
    else 
    {
        if (a >= 1)
        {
            //console.log("isNaN = true")
            let res = a ** b
            console.log(res)
        }
        else
        {
            console.log("Base deve ser igual ou superior a 1")
        }

    }

}
num1 = prompt(`Insira valor numerico para Base`)
num2 = prompt(`Insira valor numerico para Potencia`)
pow(num1, num2)