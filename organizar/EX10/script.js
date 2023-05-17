const inpCor = document.querySelector("input")
console.log(inpCor)

if(localStorage.getItem("cor"))
{
    document.body.style.backgroundColor = localStorage.getItem("cor")
}

inpCor.addEventListener("change", () => 
{
    localStorage.setItem("cor",inpCor.value)
    document.body.style.backgroundColor = inpCor.value
})

