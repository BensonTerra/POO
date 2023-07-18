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
        if(this.contas.find( conta => conta.))




        let conta  = new ContaBancaria(+numero, titular,saldo)
        //console.log(conta)
        this.contas.push(conta)
        //console.table(this.contas)
    }

    listarContas()
    {
        console.table(this.contas)
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
