import ContaBancaria from "./ContaBancaria.js"
export default class GestorContas 
{
    // Propriedades

    // Construtor

    // Métodos

}

export let listaDeContas = []

export function criarConta(numero, titular)
{
    let conta  = new ContaBancaria(numero, titular)
    console.log(conta)
    listaDeContas.push(conta)
    console.log(listaDeContas)
}
export function listarContas()//criar tabela na parte do index REV2
{

}

export function realziarDeposito()
{
    
}
realziarDeposito()

export function realizarLevantamento()
{

}

export function exibirSaldo()
{

}