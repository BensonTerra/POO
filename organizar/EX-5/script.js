var funcionarioLista = []
numFuncionarios = 2

function adicionarFuncionario()
{
    

    console.log("teste")
    for (let i = 0; i < numFuncionarios;i++)
    {
        nome = prompt("Insira nome do funcionario")
        //console.log(nome)
        salario = +prompt("Insira o salario do funcionario")
        //console.log(salario)
        departamento = prompt("Insira o departamento do funcionario")
        //console.log(departamento)
    
        let funcionario = 
        {
            id: i+1,
            name: nome,
            salary: salario,
            depart: departamento,
            segSocial: function() 
                    {
                        return this.salary * 0.11
                    }
        }
        console.log(funcionario)
        funcionarioLista.push(funcionario)
        console.log(funcionarioLista)
        salarioTotal()
    }
    
}
function mostrarFuncionario()
{
    for (funcionario of funcionarioLista)
    {
        alert(`id: ${funcionario.id}, \nname: ${funcionario.name}, \nsalary: ${funcionario.salary}, \ndepartament: ${funcionario.depart}, \nsegSocial: ${funcionario.segSocial()}`)
    }

}
function salarioTotal()
{
    let total = 0
    for (funcionario of funcionarioLista)
    {
        total += funcionario.salary
    }
    console.log(total)
}
let btnAdd = document.getElementById("btnAdicionar")
btnAdd.addEventListener("click",adicionarFuncionario)
let btnShow = document.getElementById("btnMostrar")
btnShow.addEventListener("click", mostrarFuncionario)
