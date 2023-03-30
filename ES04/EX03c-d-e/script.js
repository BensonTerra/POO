const frmGame = document.getElementsByTagName("form")[0];
function adicionarJogo(event)
{
    event.preventDefault();
    let txtJogoAno = document.getElementById("txtGameYear");
    //console.log(txtJogoAno);
    //console.log(txtJogoAno.value);
    const dateNow = new Date();
    txtJogoAno.max = dateNow.getFullYear();
    if (txtJogoAno.value > 1950)
    {
        let txtJogoNome = document.getElementById("txtGameName").value;
        let txtJogoGenero = document.getElementById("sltGameGenre");
        let txtJogoCapa = document.getElementById("urlGameCover");
        const table = document.getElementsByTagName("table")[0];
        const jogo = document.createElement("tr");

        jogo.innerHTML = 
        `
        <td>${txtJogoNome.value}</td>
        <td>${txtJogoAno.value}</td>
        <td>${txtJogoGenero.value}</td>
        <td><img src="${txtJogoCapa.value}"></td>
        <td><input type="button" value="X"></td>
        `
        table.appendChild(jogo);

        const btnX = jogo.getElementsByTagName("input")[0]
        btnX.addEventListener("click", function()
        {
            this.parentNode.parentNode.remove();
        })

        frmGame.reset()
    }
    else
    {
        alert("Ano inválido");
    }
}
frmGame.addEventListener("submit", function(event){ adicionarJogo(event)});
