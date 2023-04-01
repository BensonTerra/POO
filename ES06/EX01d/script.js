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
    console.log(`Numeros de jogos: ${games.length}`)
}
showNumberGames(games)

function addGame(event)
{
    event.preventDefault()
    const txtName = document.getElementById('addName')
    console.log(txtName.value)
    const txtYear = document.getElementById('addYear')
    console.log(txtYear.value)
    
    newGame =
    {
        name: txtName.value, year: parseInt(txtYear.value)
    }
    games.push(newGame)
    console.table(games)
}
const btnAdd = document.getElementById('add')
btnAdd.addEventListener('click', function(event){addGame(event)})