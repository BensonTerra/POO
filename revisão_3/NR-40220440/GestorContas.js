import ContaBancaria from "./ContaBancaria.js"
export default class GestorContas 
{
    contas = []

    constructor()
    {
        //constructor vazio
    }
    
    criarConta(numero, titular, saldo = 0)
    {
        let conta  = new ContaBancaria(numero, titular,saldo)
        console.log(conta)
        this.contas.push(conta)
    }

    listarContas()
    {
        console.log(this)
    }

    realizarDeposito()
    {
        console.log(this)
    }

    realizarLevantamento()
    {
        console.log(this)
    }

    verSaldo()
    {
        console.log(this)
    }
}a
