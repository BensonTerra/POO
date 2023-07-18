default class ContaBancaria
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

    
}