import GestorContas from "./GestorContas.js";

const gestor = new GestorContas();

function criarConta() {
  const numeroConta = document.getElementById("numeroContaInput").value;
  const nomeTitular = document.getElementById("nomeTitularInput").value;
  gestor.criarConta(numeroConta, nomeTitular);
}
document.querySelector("#btnCriarConta").addEventListener("click", criarConta);

function realizarDeposito() {
  const numeroConta = document.getElementById("depositoNumeroContaInput").value;
  const valor = parseFloat(document.getElementById("valorDepositoInput").value);
  gestor.realizarDeposito(numeroConta, valor);
}
document.querySelector("#btnRealizarDeposito").addEventListener("click", realizarDeposito);

function realizarLevantamento() {
  const numeroConta = document.getElementById("levantamentoNumeroContaInput").value;
  const valor = parseFloat(document.getElementById("valorLevantamentoInput").value);
  gestor.realizarLevantamento(numeroConta, valor);
}
document.querySelector("#btnRealizarLevantamento").addEventListener("click", realizarLevantamento);

function exibirSaldo() {
  const numeroConta = document.getElementById("saldoNumeroContaInput").value;
  gestor.exibirSaldo(numeroConta);
}
document.querySelector("#btnExibirSaldo").addEventListener("click", exibirSaldo);

function listarContas() {
  gestor.listarContas();
}
document.querySelector("#btnListarContas").addEventListener("click", listarContas);
