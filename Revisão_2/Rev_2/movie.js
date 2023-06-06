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

const formMovie = document.getElementById("formMovie");
const movieTitle = document.getElementById("movieTitle");
const movieYear = document.getElementById("movieYear");
const movieDirector = document.getElementById("movieDirector");
const movieDuration = document.getElementById("movieDuration");
const movieActors = document.getElementById("movieActors"); 

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
export function filmsByDirector(array) 
{
    let selectedDirector = "Quentin Tarantino";
    let res = array.filter(movie => movie.director.toLowerCase() === selectedDirector.toLowerCase());
    console.table(res);
}
  

const btn1 = document.getElementById("f1").addEventListener("click", () => filmsByDirector(movies))