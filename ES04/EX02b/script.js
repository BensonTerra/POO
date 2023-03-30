const sltColors = document.getElementsByTagName("select")[0];

function adicionarCor()
{
    console.log("adicionarCor")
    let newColor = prompt("Qual o nome da nova cor?");
    console.log(newColor)
    sltColors.innerHTML += `<option value="${newColor}">${newColor}</option>`;

}
let btnAdicionar = document.getElementById("btnAdd")
btnAdicionar.addEventListener("click",adicionarCor)

function verCor()
{
    console.log("verCor")

    alert(sltColors.value)
}
let btnVer = document.getElementById("btnShow")
btnVer.addEventListener("click",verCor)

function removerCor()

{
    console.log("removerCor")
    sltColors.remove(sltColors.selectedIndex);
}
let btnRemover = document.getElementById("btnRemove")
btnRemover.addEventListener("click",removerCor)