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

const frmAdd = document.getElementById('addForm')
function addGame(event)
{
    event.preventDefault()
    const txtNameAdd = document.getElementById('addName')
    console.log(txtNameAdd.value)
    if (isExistGame(games, txtNameAdd) === true)
    {
        return alert('Jogo já cadastrado')
    }
    else
    {
        const txtYear = document.getElementById('addYear')
        console.log(txtYear.value)
        
        newGame =
        {
            name: txtNameAdd.value, year: parseInt(txtYear.value)
        }
        games.push(newGame)
        console.table(games)
        averageLaunchDate(games)
        frmAdd.reset()
        return true
    }
    
}
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

const frmRemove = document.getElementById('removeForm')
function removeGame(event)
{
    event.preventDefault()
    const txtNameRemove = document.getElementById('removeName')
    console.log(txtNameRemove.value)
    if (isExistGame(games, txtNameRemove) === true)
    {
        const indexGame = games.findIndex(game => game.name === txtNameRemove.value)
        console.log(indexGame)
        games.splice(indexGame, 1)
        console.table(games)
        averageLaunchDate(games)
        frmRemove.reset()
    }
}
frmRemove.addEventListener('submit', function(event){removeGame(event)})