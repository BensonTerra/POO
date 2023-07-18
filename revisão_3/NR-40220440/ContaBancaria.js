export default class ContaBancaria 
{
	// Propriedades
	#numeroConta = 0
	#nomeTitular = ""
	#saldo = 0
	// Construtor
	constructor(numeroConta, nomeTitular, saldo = 0)
	{
		this.#numeroConta = numeroConta;
		this.#nomeTitular = nomeTitular;
		this.#saldo = saldo;
	}
	// Get/Set
	get numeroConta()
	{
		return this.#numeroConta;
	}
	set numeroConta(value)
	{
		this.#numeroConta = value;
	}

	get nomeTitular()
	{
		return this.#nomeTitular;
	}
	set nomeTitular(value)
	{
		this.#nomeTitular = value;
	}

	get saldo()
	{
		return this.#saldo;
	}
	set saldo(value)
	{
		this.#saldo = value;
	}
	// Métodos
    depositar(valor)
    {
        this.#saldo += valor
        alert(`Deposito de ${valor} na conta de numero ${this.#numeroConta}. Saldo atual: ${this.#saldo}`)
    }

    levantar(valor)
    {
        if (valor > this.#saldo)
        {
            alert(`Fundos insuficientes na conta ${this.#numeroConta}`)
        }
        else
        {
            this.#saldo -= valor
            alert(`Levantamento de ${valor} na conta de numero ${this.#numeroConta}. Saldo atual: ${this.#saldo}`)
        }
    }
}
