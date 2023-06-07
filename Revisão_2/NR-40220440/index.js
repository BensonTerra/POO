import { criarConta, listaDeContas } from "./GestorContas.js";
import ContaBancaria from "./ContaBancaria.js";

let conta  = new ContaBancaria(2000, "Benson")
listaDeContas.push(conta);
console.log(listaDeContas)

const numeroContaInput = document.getElementById('numeroContaInput');
console.log(numeroContaInput)
const nomeTitularInput = document.getElementById('nomeTitularInput');
console.log(nomeTitularInput) 
const btnCriarConta = document.getElementById('btnCriarConta');
console.log(btnCriarConta)

function teste()
{
    console.log("teste")
}

btnCriarConta.addEventListener('click', (event) => 
{
    event.preventDefault();
    criarConta(numeroContaInput.value,nomeTitularInput.value)  
})

const depositoNumeroContaInput = document.getElementById("cosntDepositoNumeroConta")
const valorDepositoInput = document.getElementById("valorDepositoInput")
const btnRealizarDeposito = document.getElementById("btnRealizarDeposito")

btnRealizarDeposito.addEventListener("click", (event) => 
{
    event.preventDefault();

})