import GestorContas from "./GestorContas.js";
import ContaBancaria from "./ContaBancaria.js";

let gestor = new GestorContas()

let conta  = new ContaBancaria(2000, "Benson")
console.log(conta);
gestor.contas.push(conta);
gestor.listarContas()

const numeroContaInput = document.getElementById('numeroContaInput');console.log(numeroContaInput)
const nomeTitularInput = document.getElementById('nomeTitularInput');console.log(nomeTitularInput) 
const btnCriarConta = document.getElementById('btnCriarConta');console.log(btnCriarConta)
btnCriarConta.addEventListener('click', (event) => 
{
    event.preventDefault();
    gestor.criarConta(numeroContaInput.value, nomeTitularInput.value)
})

const depositoNumeroContaInput = document.getElementById("cosntDepositoNumeroConta")
const valorDepositoInput = document.getElementById("valorDepositoInput")
const btnRealizarDeposito = document.getElementById("btnRealizarDeposito")










const listarContas = document.getElementById("btnListarContas");console.log(listarContas)
listarContas.addEventListener("click", (event) => 
{
    event.preventDefault()
    gestor.listarContas()
})


function teste()
{
    console.log("teste")
}
