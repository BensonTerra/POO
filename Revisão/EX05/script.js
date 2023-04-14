let colaboradores = 
[
    "Rui",
    "Maria",
    "Joana",
    "Beatriz",
    "Pedro",
    "Salomé",
    "Iris",
    "Vicente",
    "Dinis",
    "Ruben"
]
let colaboradoresAtivos = 
[
    
]

const intPorcentagem = document.getElementById("%total")
//console.log(intPorcentagem);
//---//
const tblBody = document.getElementById('tableBody');
//console.log(tblBody);
//--//
const txtNovoColaborador = document.getElementById('novoColaborador');
//console.log(txtNovoColaborador);
const btnAdicionar = document.getElementById('adicionar');
//console.log(btnAdicionar);

function renderLista()
{
    
    for (let colaborador of colaboradores)
    {
        //console.log(colaborador);
        const template = document.createElement("tr");

        template.innerHTML =
        `
        <td>${colaborador}</td>
        <td><input type="button" value="ENTRAR"></input></td>
        `
        //console.log(template);

        tblBody.appendChild(template);

        const colaboradorName = template.getElementsByTagName("td")[0]
        const btnEstado = template.getElementsByTagName("input")[0]
        btnEstado.addEventListener("click", () => 
        {
            estado(colaboradorName,btnEstado)
        })
    }
}
renderLista()

function adicionarColaborador()
{   console.log(colaboradores.includes(txtNovoColaborador.value))
    if (colaboradores.includes(txtNovoColaborador.value) == false)
    {
        const template = document.createElement("tr");

        template.innerHTML =
        `
        <td>${txtNovoColaborador.value}</td>
        <td><input type="button" value="ENTRAR"></input></td>
        `
        //console.log(template);

        tblBody.appendChild(template);

        const colaboradorName = template.getElementsByTagName("td")[0]
        const btnEstado = template.getElementsByTagName("input")[0]
        btnEstado.addEventListener("click", () => 
        {
            estado(colaboradorName,btnEstado)
        })

        colaboradores.push(txtNovoColaborador.value)
    }
    else
    {
        return alert("Já existe um colaborador cadastrado com esse nome")
    }
}
btnAdicionar.addEventListener("click", adicionarColaborador)

function estado(nome, estadoAtual)
{
    console.log("Estado");
    if (estadoAtual.value == "ENTRAR")
    {
        colaboradoresAtivos.push(nome.innerHTML);
        console.table(colaboradoresAtivos)

        estadoAtual.value = "SAIR";
        porcentagem()
    }
    else if (estadoAtual.value == "SAIR")
    {
        let index = colaboradoresAtivos.indexOf(nome.innerHTML);
        remove(index)
        console.table(colaboradoresAtivos)

        estadoAtual.value = "ENTRAR";
        porcentagem()
    }
}

function remove(index)
{
    colaboradoresAtivos.splice(index, 1)
}

function porcentagem()
{
    let total = colaboradoresAtivos.length/colaboradores.length
    console.log(total*100)
    intPorcentagem.innerHTML = `${total*100}%`
}
porcentagem()