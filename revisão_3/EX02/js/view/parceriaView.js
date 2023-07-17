import { Parceria, nomePorCursos, totalProjetos, empresaMaisProjetos, numEmpresasCurso, addProjetoParceria, removerFunction } from "../model/parceriaModel.js";//console.log(Book)

let parceriaItem = ""
export var parcerias = [];
//constructor(nomeEmpresa, email, cursos, nProjetos, nomeProjetos)
parceriaItem  = new Parceria("MTK Digital Agency", "mtk@mtk.com", ["TSIW", "Design"], 5, ["Imagem gráfica MKTalent", "Campanha publicitária"])
parcerias.push(parceriaItem)
parceriaItem  = new Parceria( "BindTunning","contacto@bindtunning.com",["TSIW"],3,["Web Parts for Sharepoint", "Sharepoint Intranet Templates"])
parcerias.push(parceriaItem)
parceriaItem = new Parceria("Kendir Studios","edu@kendir.com",["TSIW", "Multimédia", "Design"],4,["Desenvolvimento aventuras educativas"])
parcerias.push(parceriaItem)
//console.table(parcerias)

export function renderView()
{
    //console.log("renderView")

    let table = document.getElementById("table")
    let content = ""
    table.innerHTML = content

    content =
    `
        <tr>
            <th>NOME DA EMPRESA</th>
            <th>EMAIL</th>
            <th>CURSOS</th>
            <th>NUMEROS DE PROJETOS</th>
            <th>PROJETOS</th>
            <th>AÇÃO</th>
        </tr>
    `
    table.innerHTML = content

    parcerias.forEach( parceria => 
    {
        content =
        `
            <tr>
                <th>${parceria.nomeEmpresa}</th>
                <th>${parceria.email}</th>
                <th>${parceria.cursos}</th>
                <th>${parceria.nProjetos}</th>
                <th>${parceria.nomeProjetos}</th>
                <th><input type="button" name="${parceria.nomeEmpresa}" id="remover" value="REMOVER"></th>
            </tr>
        `
        table.innerHTML += content
    })

    let btnsRemover =  document.querySelectorAll("#remover").forEach(element => { element.addEventListener("click", removerFunction)})

}
renderView()

let btn1 = document.getElementById("f1").addEventListener("click", totalProjetos)
let btn2 = document.getElementById("f2").addEventListener("click", nomePorCursos)
let btn3 = document.getElementById("f3").addEventListener("click", empresaMaisProjetos)
let btn4 = document.getElementById("f4").addEventListener("click", numEmpresasCurso)
let btn5 = document.getElementById("f5").addEventListener("click", addProjetoParceria)