const frmUsers = document.getElementsByTagName("form")[0];
function adicionarUsers(event)
{
    event.preventDefault();
    console.log("Adicionando usuários");
    let nome = document.getElementById("txtNome").value;
    if (nome == "")
    {
        alert("Preencha o campo nome");
        return;
    }
    else
    {
        let curso = document.getElementsByName("curso");

        let cursoSlecionado = ""
        for (let i = 0; i < curso.length; i++)
        {
            if (curso[i].checked == true)
            {
                cursoSlecionado = curso[i].value;
            }
        }
        console.log(cursoSlecionado);

        let perfil = document.getElementById("sltTipoPerfil").value;
        let perfilSlecionado = ""
        if (perfil == "estudante")
        {
            perfilSlecionado = "Estudante";
        }
        else if (perfil == "funcionario")
        {
            perfilSlecionado = "Funcionario";
        }
        else
        {
            perfilSlecionado = prompt("Digite o tipo de perfil");
        }
        console.log(perfilSlecionado);

        let manha = document.getElementById("sessaoManha").checked;
        let tarde = document.getElementById("sessaoTarde").checked;
        let sessaoSelecionada = "";
        if (manha === true && tarde === true)
        {
            sessaoSelecionada = "M/T";
        }
        else if (manha === true && tarde === false)
        {
            sessaoSelecionada = "M";
        }
        else if (manha === false && tarde === true)
        {
            sessaoSelecionada = "T";
        }
        console.log(sessaoSelecionada);


        let tabela = document.getElementsByTagName("table")[0];
        let linhaConteudo = document.createElement("tr");
        linhaConteudo.innerHTML = 
        `
        <td>${nome}</td>
        <td>${cursoSlecionado}</td>
        <td>${perfil}</td>
        <td>${sessaoSelecionada}</td>
        `

        tabela.appendChild(linhaConteudo);
    }
}
//console.log(frmUsers);
frmUsers.addEventListener("submit", function(event) {adicionarUsers(event)});

function contagem()
{
    let tabela = document.getElementsByTagName("table")[0]
    let content = tabela.getElementsByTagName("tr")
    console.log(content.length - 1);
}
const btnContagem = document.querySelector('input[type="button"]');
btnContagem.addEventListener("click", contagem);