const games = 
[
    { name: 'Rick Dangerous', year: 1989 },//obejeto 1
    { name: 'Goblins', year: 1992 },//obejeto 2
    { name: 'Golden Axe', year: 1989 }//obejeto 3
] // Lista com objetos

function showInConsole(games)
{
    for (let game of games)
    {
        console.log(`Name: ${game.name} / Year: ${game.year}`)
    }
}
showInConsole(games)