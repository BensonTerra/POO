import Turma from "./Turma.js";
let GestorAlunos = new Turma()

let aluno1 =  GestorAlunos.adicionarAluno("aluno1",20,10,11)
let aluno2 =  GestorAlunos.adicionarAluno("aluno2",20,12,13)

const nomeAluno = document.getElementById("nomeAluno");
const idadeAluno = document.getElementById('idadeAluno');
const nota1Aluno = document.getElementById('nota1Aluno');
const nota2Aluno = document.getElementById('nota2Aluno');
const formularioAluno = document.getElementById("formularioAluno").addEventListener("submit", (event) =>
{
    event.preventDefault();

    GestorAlunos.adicionarAluno(nomeAluno.value,idadeAluno.value,nota1Aluno.value,nota2Aluno.value)
    GestorAlunos.mediaTurma()
    GestorAlunos.exibirAlunos()
    GestorAlunos.melhorAluno()
})

const mediaTurma = document.getElementById('mediaTurma').addEventListener("click",(event) => 
{
    GestorAlunos.mediaTurma()
})

const exibirAlunos = document.getElementById('exibirAlunos').addEventListener("click",(event) => 
{
    GestorAlunos.exibirAlunos()
})

const melhorAluno = document.getElementById('melhorAluno').addEventListener("click",(event) => 
{
    GestorAlunos.melhorAluno()
})

function teste()
{
    console.log("teste")
}