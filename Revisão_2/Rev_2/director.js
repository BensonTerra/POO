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
}
export let directors = []

const director1 = new Director("Frank Darabont", "28 de janeiro de 1959", "Estados Unidos");
const director2 = new Director("Christopher Nolan", "30 de julho de 1970", "Reino Unido");
const director3 = new Director("Quentin Tarantino", "27 de março de 1963", "Estados Unidos");
directors.push(director1);
directors.push(director2);
directors.push(director3);
renderViewDirector()

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

    //console.log(directors)

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


