export default class Movie
{
    title = ""
    year = 2020
    director = ""
    duration = 0
    actors = []

    constructor(title, year, director, duration, actors)
    {
        this.title = title
        this.year = year
        this.director = director
        this.duration = duration
        this.actors = actors
    }
}

export let movies = [];

const movie1 = new Movie("The Shawshank Redemption", 1994, "Frank Darabont", 142, ["Tim Robbins", "Morgan Freeman"]);
const movie2 = new Movie("Inception", 2010, "Christopher Nolan", 148, ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]);
const movie3 = new Movie("Pulp Fiction", 1994, "Quentin Tarantino", 154, ["John Travolta", "Samuel L. Jackson", "Uma Thurman"]);
const movie4 = new Movie("Inglourious Bastards",2009,"Quentin Tarantino",153,["Brad Pitt", "Christoph Waltz", "Diane Kruger"]);
movies.push(movie1);
movies.push(movie2);
movies.push(movie3);
movies.push(movie4);
renderView()

formMovie.addEventListener("submit", (event) => 
{
    event.preventDefault()

    console.log("teste")
    console.log(movieTitle.value)
    console.log(movieYear.value)
    console.log(movieDirector.value)
    console.log(movieDuration.value)
    console.log(movieActors.value)

    let movie = new Movie(movieTitle.value, movieYear.value, movieDirector.value, movieDuration.value, movieActors.value)
    movies.push(movie)
    console.log(movies)
    renderView()
})

export function renderView()
{
    let table = document.getElementById("table")
    let content = ""

    content =
    `
        <tr>
            <th>TÍTULO</th>
            <th>ANO</th>
            <th>DIRETOR</th>
            <th>DURAÇÃO</th>
            <th>ATORES</th>
        </tr>
    `
    table.innerHTML = content

    movies.forEach(movie => 
    {
        content += 
        `
        <tr>
            <th>${movie.title}</th>
            <th>${movie.year}</th>
            <th>${movie.director}</th>
            <th>${movie.duration}</th>
            <th>${movie.actors}</th>
        </tr>
        `
    })
    table.innerHTML = content
}
renderView()
/*----------------------------------------------------------------*/
export function filmsByDirector() 
{
    let selectedDirector = "Quentin Tarantino";
    let res = movies.filter(movie => movie.director.toLowerCase() === selectedDirector.toLowerCase());
    console.table(res);
}
const btn1 = document.getElementById("f1").addEventListener("click", () => filmsByDirector())

function filmsByActor()
{
    let res = []
    let actmovies = []
    let selectedActor = "Tim Robbins";
    selectedActor = selectedActor
    movies.forEach(movie => 
    {
        //console.log(movie.actors)
        actmovies = movie.actors.map(Element => {return Element.toLowerCase()})
        //console.log(selectedActor)
        if (actmovies.includes(selectedActor.toLowerCase()))
        {
            res.push(movie);
        }
    })
    console.table(res)
}
const btn2 = document.getElementById("f2").addEventListener("click", () => filmsByActor())


import { directors } from "./director.js"
function filmsByCountry()
{
    let res = []
    let selectedCountry = "Estados Unidos";
    let dirArray = directors.filter(director => director.country.toLowerCase() === selectedCountry.toLowerCase())
    console.table(dirArray)
    movies.forEach(movie => 
    {
        dirArray.forEach(director =>    
        {
            if (movie.director.toLowerCase() === director.name.toLowerCase())
            {
                res.push(movie);
            }
        })
    })
    console.table(res)
}
const btn3 = document.getElementById("f3").addEventListener("click", () => filmsByCountry())
