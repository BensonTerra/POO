export default class ContaBancaria
{
    #numConta = 0;
    #nomeTitular = "";
    #saldo = 0

    constructor(numConta, nomeTitular, saldo)
    {
        this.#numConta = numConta;
        this.#nomeTitular = nomeTitular;
        this.#saldo = saldo;
    }

    get numeroConta()
    {
        return this.#numConta;
    }

    get nomeTitular()
    {
        return this.#nomeTitular;
    }

    get saldo()
    {
        return this.#saldo;
    }

    set saldo(valor)
    {
        this.#saldo = valor;
    }

    depositar(valor)
    {
        this.#saldo += valor
        alert(`Deposito de ${valor} na conta de numero ${this.#numConta}. Saldo atual: ${this.#saldo}`)
    }

    levantar(valor)
    {
        if (valor > this.#saldo)
        {
            alert(`Fundos insuficientes na conta ${this.#numConta}`)
        }
        else
        {
            this.#saldo -= valor
            alert(`Levantamento de ${valor} na conta de numero ${this.#numConta}. Saldo atual: ${this.#saldo}`)
        }
    }
}
