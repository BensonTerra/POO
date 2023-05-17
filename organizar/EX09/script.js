const sltEscolas = document.querySelector("select")
console.log(sltEscolas)
const btnSubmit = document.querySelector("button")
console.log(btnSubmit)

if(localStorage.getItem("Escola"))
{
    sltEscolas.value = localStorage.getItem("Escola");
}

btnSubmit.addEventListener("click", () => 
{
    localStorage.setItem("Escola", sltEscolas.value)
})
