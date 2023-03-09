function ready(peso,altura) 
{
    const BMI = peso / altura**2
    if (BMI < 18.5)
    {
        alert("you are under weight")
    }
    else if (BMI >=18.5 && BMI <24.9)
    {
        alert("you are normal weight")
    }
    else if (BMI >=25.0 && BMI <29.9)
    {
        alert("you are over weight")
    }
    else if (BMI >=30.0 && BMI <34.9)
    {
        alert("you are obese(C1) weight")
    }
    else if (BMI >=35.0 && BMI <39.9)
    {
        alert("you are obese(C2) weight")
    }
    else if (BMI > 40.0)
    {
        alert("you are obese(C3) weight")
    }
}
peso = prompt("Insira seu peso: ")
altura = prompt("Insira sua altura: ")
ready(peso,altura)