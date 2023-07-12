import ContaBancaria from './ContaBancaria.js';

export default class GestorContas {
  constructor() {
    this.contas = [];
  }

  criarConta(numeroConta, nomeTitular, saldo = 0) {
    const contaExistente = this.contas.find(conta => conta.numeroConta === numeroConta);
    if (contaExistente) {
      alert(`Já existe uma conta com o número ${numeroConta}.`);
      return;
    }
    const novaConta = new ContaBancaria(numeroConta, nomeTitular, saldo);
    this.contas.push(novaConta);
    alert(`Nova conta criada: ${novaConta.numeroConta} - ${novaConta.nomeTitular}`);
  }

  listarContas() {
    console.log('Contas existentes:');
    this.contas.forEach(conta => {
      alert(`${conta.numeroConta} - ${conta.nomeTitular}`);
    });
  }

  realizarDeposito(numeroConta, valor) {
    const conta = this.contas.find(conta => conta.numeroConta === numeroConta);
    if (!conta) {
      alert(`Conta ${numeroConta} não encontrada.`);
      return;
    }
    conta.depositar(valor);
  }

  realizarLevantamento(numeroConta, valor) {
    const conta = this.contas.find(conta => conta.numeroConta === numeroConta);
    if (!conta) {
      alert(`Conta ${numeroConta} não encontrada.`);
      return;
    }
    conta.levantar(valor);
  }

  exibirSaldo(numeroConta) {
    const conta = this.contas.find(conta => conta.numeroConta === numeroConta);
    if (!conta) {
      alert(`Conta ${numeroConta} não encontrada.`);
      return;
    }
    alert(`Saldo da conta ${numeroConta}: ${conta.saldo}`);
  }
}

