export class Director
{
    id = 0;
    name = ""
    dateBirth = new Date();
    country = "Portugal"

    constructor(id, name, dateBirth,country)
    {
        this.id = getNextId();
        this.name = name;
        this.dateBirth = dateBirth;
        this.country = country;
    }
}

export const directors = []

function getNextId()
{
    let max = 0
    for(let director of directors)
    {
        if(director.id > max)
        {
            max = director.id
        }
    }
}

const addNewDirector = document.getElementById('addNewDirector')
const dialogDirector = document.getElementById('dialogDirector')
const formDirector = document.getElementById("formDirector")

addNewDirector.addEventListener('click', (event) =>
{
    event.preventDefault();
    dialogDirector.showModal()
})