export class Parceria
{
    nomeEmpresa = ""
    email = ""
    cursos = []
    nProjetos = 0
    nomeProjetos = []

    constructor(nomeEmpresa, email, cursos, nProjetos, nomeProjetos)
    {
        this.nomeEmpresa = nomeEmpresa
        this.email = email
        this.cursos = cursos
        this.nProjetos = nProjetos
        this.nomeProjetos = nomeProjetos
    }

    /*nomeEmpresa*/
    get _nomeEmpresa()
    {
        return this.nomeEmpresa
    }
    set _nomeEmpresa(val)
    {
        this.nomeEmpresa = val
    }
    /*email*/
    get _email()
    {
        return this.email
    }
    set _email(val)
    {
        this._email = val
    }
    /*cursos*/
    get _cursos()
    {
        return this.cursos
    }
    set _cursos(val)
    {
        this.cursos = val
    }
    /*nProjetos*/
    get _nProjetos()
    {
        return this.nProjetos
    }
    set _nProjetos(val)
    {
        this.nProjetos = val
    }
    /*nomeProjetos*/
    get _nomeProjetos()
    {
        return this.nomeProjetos
    }
    set _nomeProjetos(val)
    {
        this.nomeProjetos = val
    }
}

import { parcerias, renderView } from "../view/parceriaView.js";

        /*--F1--*/
export function totalProjetos()
{
    //console.log("Total Projetos")
    let res = parcerias.reduce( (sum, parceria) => { return sum + parceria.nProjetos },0)
    console.log(res)
}

        /*--F2--*/
export function nomePorCursos()
{
    //console.log("Nome Por Cursos")
    let cursoFiltro = ""
    cursoFiltro = prompt("Qual curso deseja filtrar?")
    //console.log(cursoFiltro)
    let res = `Empresas que possuem o curso "${cursoFiltro.toUpperCase()}": `

    parcerias.forEach( parceria => 
    {
        let cursos = parceria.cursos
        //console.log(cursos)
        let cursosLower = cursos.map( elemento => elemento.toLowerCase())
        //console.log(cursosLower)
        if(cursosLower.includes(cursoFiltro.toLowerCase()))
        {
            res += parceria.nomeEmpresa + " || "
        }
    })
    console.log(res)
}

        /*--F3--*/
export function empresaMaisProjetos()
{
    console.log(`empresaMaisProjetos`)
    let max = 0
    let empresa = ""
    let res = 0

    parcerias.forEach( parceria => 
    {
        console.log(parceria.nProjetos)
        if(parceria.nProjetos > max)
        {
            max = parceria.nProjetos
            res = `A empresa com mais projetos é ${parceria.nomeEmpresa} com ${parceria.nProjetos} projetos ativos`
        }

    })
    console.log(res)
}

        /*--F4--*/
export function numEmpresasCurso()
{
    console.log(`numEmpresasCurso`)
    //let cursoFiltro = "tsiw"
    let cursoFiltro = prompt("Qual curso deseja filtrar?")
    //console.log(cursoFiltro)
    let res = `Número de empresas que possuem o curso "${cursoFiltro.toUpperCase()}": `
    let resNum = 0

    parcerias.forEach( parceria => 
    {
        let cursos = parceria.cursos
        //console.log(cursos)
        let cursosLower = cursos.map( elemento => elemento.toLowerCase())
        console.log(cursosLower)
        if(cursosLower.includes(cursoFiltro.toLowerCase()))
        {
            resNum += 1
        }
    })
    res += `${resNum}`
    console.log(res)

}

        /*--F5--*/
export function addProjetoParceria()
{
    let temp = []
    parcerias.forEach( parceria => 
    {
        console.log(`${parceria.nomeEmpresa}`)
        temp.push(parceria.nomeEmpresa)

    })
    //console.log(temp)

    let vat = []

    let arrayParcerias = temp.map(elemento => elemento.toLowerCase())
    //console.log(arrayParcerias)
    let selectedParceria = prompt("Escolha uma parceria para adcionionar um projeto: ")
    //let selectedParceria = "BindTunning"
    console.log(selectedParceria)
    if (arrayParcerias.includes(selectedParceria.toLowerCase()))
    {
        let parceria = parcerias.find(elemento => elemento.nomeEmpresa.toLowerCase() === selectedParceria.toLowerCase());//console.log(parceria)
        let projetosParceriaTemp = parceria.nomeProjetos;console.log(projetosParceriaTemp)
        let projetosParceria = projetosParceriaTemp.map( elemento => elemento.toLowerCase());//console.log(projetosParceria)
        let newProject = prompt("Insira o nome do novo projetos:")
        if (!projetosParceria.includes(newProject))
        {
            //console.log("não incluso")
            projetosParceria.push(newProject)
            parceria.nomeProjetos = projetosParceria
            //console.log(projetosParceria)
            renderView()
        }
        else
        {
            alert("Projeto já existente")
        }
    }
    else
    {
        alert("Empresa não listada")
    }
}

        /*Remover*/
export function removerFunction()
{
    //console.table(parcerias)
    let removeParceriaHTML = this.parentNode.parentNode;//console.log(removeParceriaHTML)
    let removeParceriaTxt = removeParceriaHTML.getElementsByTagName("th")[0].innerHTML;//console.log(removeParceriaTxt)
    let removeParceriaArray = parcerias.findIndex(element => element.nomeEmpresa == removeParceriaTxt);//console.log(removeParceriaArray)
    parcerias.splice(removeParceriaArray,1);//console.table(parcerias)
    removeParceriaHTML.remove()
}