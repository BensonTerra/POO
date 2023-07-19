import GestorContas from "./GestorContas.js";
import ContaBancaria from "./ContaBancaria.js";

let gestor = new GestorContas()

function init()
{
    let conta  = new ContaBancaria(2000, "Benson0", 1000);//console.log(conta);
    gestor.contas.push(conta);
    conta  = new ContaBancaria(2001, "Benson1");//console.log(conta);
    gestor.contas.push(conta);
    conta  = new ContaBancaria(2002, "Benson2");//console.log(conta);
    gestor.contas.push(conta);
    console.table(gestor.contas)
}
init()

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
    event.preventDefault();
    console.clear()

    //console.log(depositoNumeroContaInput.value)
    //console.log(valorDepositoInput.value)

    gestor.realizarDeposito(depositoNumeroContaInput.value, parseFloat(valorDepositoInput.value))
    gestor.listarContas()
})

const levantamentoNumeroContaInput = document.getElementById("levantamentoNumeroContaInput")
const valorLevantamentoInput = document.getElementById("valorLevantamentoInput")
const btnRealizarLevantamento = document.getElementById("btnRealizarLevantamento")
btnRealizarLevantamento.addEventListener("click", (event) => 
{
    event.preventDefault();
    console.clear()

    //console.log(levantamentoNumeroContaInput.value)
    //console.log(valorLevantamentoInput.value)

    gestor.realizarLevantamento(levantamentoNumeroContaInput.value, valorLevantamentoInput.value)
    gestor.listarContas()
})

const saldoNumeroContaInput = document.getElementById("saldoNumeroContaInput")
const btnExibirSaldo = document.getElementById("btnExibirSaldo")
btnExibirSaldo.addEventListener("click", (event) => 
{
    event.preventDefault()
    console.clear()

    gestor.verSaldo(saldoNumeroContaInput.value)
})

const listarContas = document.getElementById("btnListarContas");//console.log(listarContas)
listarContas.addEventListener("click", (event) => 
{
    event.preventDefault()
    console.clear()

    gestor.listarContas()
})

function teste()
{
    console.log("teste")
}
