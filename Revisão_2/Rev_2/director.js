export default class Director
{
    name = ""
    dateBirth = new Date();
    country = "Portugal"

    constructor(name, dateBirth,country)
    {
        this.name = name;
        this.dateBirth = dateBirth;
        this.country = country;
    }

    get name()
    {
        return this.name;
    }
}
export const directors = []

const formDirector = document.getElementById("formDirector")
const directorName = document.getElementById("directorName")
const DirectorBirth = document.getElementById("directorBirth")
const directorCountry = document.getElementById("directorCountry")
const closeDialogDirector = document.getElementById("closeDialogDirector")

formDirector.addEventListener("submit", (event) => 
{
    event.preventDefault()

    //console.log(directorName.value)
    //console.log(DirectorBirth.value)
    //console.log(directorCountry.value)

    let director = new Director(directorName.value, DirectorBirth.value, directorCountry.value)
    directors.push(director)
    //console.log(directors)
    renderViewDirector()
})
closeDialogDirector.addEventListener("click", (event) => 
{
    event.preventDefault()
    dialogDirector.close()
})
export function renderViewDirector()
{
    let selDirector = document.getElementById("movieDirector")
    let content = ""

    content = `<option selected>Diretor</option>`
    selDirector.innerHTML = content

    console.log(directors)

    directors.forEach(director => 
    {
        content += 
        `
        <option value="${director.name}">${director.name}</option>
        `
    })
    selDirector.innerHTML = content
}
renderViewDirector()
/*----------------------------------------------------------------*/


