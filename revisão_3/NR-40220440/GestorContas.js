import ContaBancaria from "./ContaBancaria.js"
export default class GestorContas 
{
    constructor()
    {
        this.contas = []
    }
    
    criarConta(numero, titular, saldo = 0)
    {
        const contaInArray = this.contas.find(conta => +conta.numeroConta == +numero);
        //console.log(contaInArray)
        //console.log(this.contas)

        if (contaInArray) 
        {
            alert(`Já existe uma conta com o número ${numero}.`);
            return;
        }
        else
        {
            let novaConta  = new ContaBancaria(+numero, titular,saldo)
            //console.log(conta)
            this.contas.push(novaConta)
            //console.table(this.contas)
        }
        
    }

    listarContas()
    {
        console.table(this.contas)
    }

    realizarDeposito(numeroConta, valor)
    {
        const conta = this.contas.find(conta => +conta.numeroConta == +numeroConta);
        console.log(conta)

        if(!conta)
        {
            alert("Conta não encontrada")
            return
        }
        else
        {
            conta.depositar(valor)
        }
    }

    realizarLevantamento(numeroConta, valor)
    {
        const conta = this.contas.find(conta => +conta.numeroConta == +numeroConta);
        console.log(conta)

        if(!conta)
        {
            alert("Conta não encontrada")
            return
        }
        else
        {
            conta.levantar(valor)
        }
    }

    verSaldo(numeroConta)
    {
        const conta = this.contas.find(conta => +conta.numeroConta == +numeroConta);
        console.log(conta)
    }
}
