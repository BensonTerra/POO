function teste()
{
    
    let txt = document.getElementById("text")
    let p1 = document.getElementById("p1")
    console.log(txt.value)
    if (txt.value === "")
    {
        p1.textContent = "Escreva algo"
    }
    else
    {
        p1.textContent = txt.value
    }
    
    
}
let btn = document.getElementById("btn")
btn.addEventListener("click",teste)