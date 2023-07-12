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

import { parcerias } from "../view/parceriaView.js";

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
    let cursoFiltro = "tsiw"
    //cursoFiltro = prompt("Qual curso deseja filtrar?")
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