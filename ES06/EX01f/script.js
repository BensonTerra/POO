const games = 
[
    { name: 'Rick Dangerous', year: 1989 },//obejeto 1
    { name: 'Goblins', year: 1992 },//obejeto 2
    { name: 'Golden Axe', year: 1989 }//obejeto 3
] // Lista com objetos

function showGames(games)
{
    for (let game of games)
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
    if (isExistGame(games, txtName) === true)
    {
        return alert('Jogo já cadastrado')
    }
    else
    {
        const txtYear = document.getElementById('addYear')
        console.log(txtYear.value)
        
        newGame =
        {
            name: txtName.value, year: parseInt(txtYear.value)
        }
        games.push(newGame)
        console.table(games)
        averageLaunchDate(games)
        return true
    }
    
}
const frmAdd = document.getElementById('addForm')
frmAdd.addEventListener('submit', function(event){addGame(event)})

function isExistGame(games, txtName)
{
    if (games.some(game => game.name === txtName.value))
    {
        return true
    }
    else
    {
        return false
    }
}

function averageLaunchDate(games)
{
    let average = 0
    for (let game of games)
    {
        average += game.year
    }
    average = average / games.length
    console.log(average)
}
averageLaunchDate(games)
