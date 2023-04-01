const games = 
[
    { name: 'Rick Dangerous', year: 1989 },//obejeto 1
    { name: 'Goblins', year: 1992 },//obejeto 2
    { name: 'Golden Axe', year: 1989 }//obejeto 3
] // Lista com objetos

function showGames(obj)
{
    for (let game of obj)
    {
        console.log(`Name: ${game.name} / Year: ${game.year}`)
    }
}
showGames(games)

function showNumberGames(games)
{
    console.log(games.length)
}
showNumberGames(games)