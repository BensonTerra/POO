export default class ContaBancaria {

  #numeroConta;

  #nomeTitular;

  #saldo;

  constructor(numeroConta, nomeTitular, saldo = 0) {
    this.#numeroConta = numeroConta;
    this.#nomeTitular = nomeTitular;
    this.#saldo = saldo;
  }

  get numeroConta() {
    return this.#numeroConta;
  }

  get nomeTitular() {
    return this.#nomeTitular;
  }

  get saldo() {
    return this.#saldo;
  }

  set saldo(valor) {
    this.#saldo = valor;
  }

  depositar(valor) {
    this.#saldo += valor;
    alert(
      `Depósito de ${valor} realizado na conta ${this.#numeroConta}. Saldo atual: ${this.#saldo}`
    );
  }

  levantar(valor) {
    if (valor > this.#saldo) {
      alert(`Saldo insuficiente na conta ${this.#numeroConta}.`);
    } else {
      this.#saldo -= valor;
      alert(
        `Levantamento de ${valor} realizado na conta ${this.#numeroConta}. Saldo atual: ${this.#saldo}`
      );
    }
  }
}
