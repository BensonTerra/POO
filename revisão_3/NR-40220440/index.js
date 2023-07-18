import GestorContas from "./GestorContas.js";
import ContaBancaria from "./ContaBancaria.js";

let gestor = new GestorContas()

let conta  = new ContaBancaria(2000, "Benson0");//console.log(conta);
gestor.contas.push(conta);
conta  = new ContaBancaria(2001, "Benson1");//console.log(conta);
gestor.contas.push(conta);
conta  = new ContaBancaria(2002, "Benson2");//console.log(conta);
gestor.contas.push(conta);
console.table(gestor.contas)

const numeroContaInput = document.getElementById('numeroContaInput');//console.log(numeroContaInput)
const nomeTitularInput = document.getElementById('nomeTitularInput');//console.log(nomeTitularInput) 
const btnCriarConta = document.getElementById('btnCriarConta');//console.log(btnCriarConta)
btnCriarConta.addEventListener('click', (event) => 
{
    event.preventDefault();
    gestor.criarConta(numeroContaInput.value, nomeTitularInput.value)
})

const depositoNumeroContaInput = document.getElementById("depositoNumeroContaInput")
const valorDepositoInput = document.getElementById("valorDepositoInput")
const btnRealizarDeposito = document.getElementById("btnRealizarDeposito")
btnRealizarDeposito.addEventListener("click", (event) =>
{
    console.log(depositoNumeroContaInput.value)
    console.log(valorDepositoInput.value)

    
    event.preventDefault();
    gestor.realizarDeposito(depositoNumeroContaInput.value, parseFloat(valorDepositoInput.value))
    
})










const listarContas = document.getElementById("btnListarContas");//console.log(listarContas)
listarContas.addEventListener("click", (event) => 
{
    event.preventDefault()
    gestor.listarContas()
})


function teste()
{
    console.log("teste")
}
