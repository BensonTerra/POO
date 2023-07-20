import Aluno from "./Aluno.js"
export default class Turma 
{
    constructor()
    {
        this.alunos = []
    }
    
    adicionarAluno(nomeAluno, idadeAluno, nota1Aluno, nota2Aluno)
    {
        const alunoExiste = this.alunos.find(aluno => aluno.nome === nomeAluno);

        if(alunoExiste)
        {
            alert(`Já existe aluno com o nome "${nomeAluno}".`);
            return;
        }
        else
        {
            let notasTotais = [nota1Aluno,nota2Aluno]
            let novoAluno = new Aluno(nomeAluno, idadeAluno, notasTotais)
            this.alunos.push(novoAluno);
            //console.table(this.alunos)

        }

    }

    mediaTurma()
    {
        let total = 0
        let notasAlunos = this.alunos.map(element => element.notas);console.log(notasAlunos)
        notasAlunos.forEach(element => 
        {
            console.log(element)
            let totalAluno = element.map(element2 => parseFloat(element2)).reduce((total, valorAtual) => total + valorAtual, 0);
            console.log(totalAluno);
            total = total + totalAluno
        })
        console.log(total/(2 * notasAlunos.length));
    }

    exibirAlunos()
    {   
        let listaAlunos = ""
        let alunos = this.alunos.map(element => element.nome);console.log(alunos);
        alert("Alunos lsitados da turma")
        alunos.forEach(nome => 
        {
            listaAlunos += nome + " | "
        })
        alert(`${listaAlunos}`)
    }

    melhorAluno()
    {
        let melhorAluno = ""
        let melhorNota = 0
        let aluno = this.alunos.forEach(element => 
        {
            let notaAluno = element.calcularMedia();console.log(notaAluno)
            if(notaAluno > melhorNota)
            {
                melhorAluno = element.nome
                melhorNota = notaAluno
            }
        })
        alert(`O aluno com a melhor nota é o ${melhorAluno} com ${melhorNota}`)
    }
}

/*
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
*/