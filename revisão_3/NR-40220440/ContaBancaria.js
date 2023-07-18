export default class ContaBancaria 
{
	// Propriedades
	#numeroConta = 0
	#nomeTitular = ""
	#saldoConta = 0
	// Construtor
	constructor(numeroConta, nomeTitular, saldoConta = 0)
	{
		this.#numeroConta = numeroConta;
		this.#nomeTitular = nomeTitular;
		this.#saldoConta = saldoConta;
	}
	// Get/Set
	get _numeroConta()
	{
		return this.#numeroConta;
	}
	set _numeroConta(value)
	{
		this.#numeroConta = value;
	}

	get _nomeTitular()
	{
		return this.#nomeTitular;
	}
	set _nomeTitular(value)
	{
		this.#nomeTitular = value;
	}

	get _saldoConta()
	{
		return this.#saldoConta;
	}
	set _saldoConta(value)
	{
		this.#saldoConta = value;
	}
	// Métodos
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
