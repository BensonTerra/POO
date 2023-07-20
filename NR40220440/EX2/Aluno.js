export default class Aluno 
{
	// Propriedades
	nome = ""
	idade = 0
	notas = []
	// Construtor
	constructor(nome, idade, notas)
	{
		this.nome = nome;
		this.idade = idade;
		this.notas = notas;
	}
	// Get/Set
	get nome()
	{
		return this.nome
	}
	
	get idade()
	{
		return this.idade
	}

	get notas()
	{
		return this.notas
	}

	calcularMedia()
	{
		let media = this.notas.map(element2 => parseFloat(element2)).reduce((total, elemento) => total + elemento, 0);//console.log(media)
		return (media/2)
	}
}
