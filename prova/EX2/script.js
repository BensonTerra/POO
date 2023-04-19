const tabelaClass =
[
    {
        nome: "maria",
        pontos: 9,
        nivel: 1
    },
    {
        nome: "carlos",
        pontos: 7,
        nivel: 1
    },
    {
        nome: "joao",
        pontos: 12,
        nivel: 2
    }
]
console.log("teste")

function listanivel(nivelSelected)//Função que permite identificar usuarios baseado no level
{
    let res = ""
    tabelaClass.forEach(user =>
        {
            if (user.nivel == nivelSelected)
            {
                res += user.nome + ","
            }
        }
    );
    alert(`jogadores no level ${nivelSelected}:${res}`) 
}
listanivel(1)

function somaTotal(nivelSelected)//Função que permite somar a pontuação de todos os usuarios  que estejam no mesmo nivel
{
    let res = 0
    tabelaClass.forEach(user =>
        {
            if (user.nivel == nivelSelected)
            {
                res += user.pontos
                console.log(res)
            }
        }
    );
    alert(`Total de pontos do nivel ${nivelSelected}=${res}`) 
}
somaTotal(1)