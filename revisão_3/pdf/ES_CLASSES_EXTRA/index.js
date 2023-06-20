import { Movie } from './classes/Movie.js';
import { Director } from './classes/Director.js';

const directors = [];
const movies = [];

function getNextId(arr) {
    let max = 0;
    for (let item of arr) {
        if (parseInt(item.id) > max)
            max = item.id
    }
    return max + 1;
}

// MOVIE
const showButton = document.getElementById('showDialog');
const dialogMovie = document.getElementById("dialogMovie")
const formMovie = document.getElementById("formMovie");

showButton.addEventListener("click", () => {
    dialogMovie.showModal()
})

formMovie.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("movieTitle").value;
    const year = document.getElementById("movieYear").value;
    const director = document.getElementById("movieDirector").value;
    const duration = document.getElementById("movieDuration").value;
    const actors = document.getElementById("movieActors").value;

    const movie = new Movie(getNextId(movies), title, year, director, duration, actors);
    movies.push(movie)

    renderTable();
    dialogMovie.close()
})

movies.push(new Movie(getNextId(movies), 'Movie A', 2020, 1, 90, 'A,B,C,D'))
movies.push(new Movie(getNextId(movies), 'Movie B', 2022, 2, 90, 'A,W'))
movies.push(new Movie(getNextId(movies), 'Movie C', 2021, 2, 90, 'A,B,Z,Q'))
movies.push(new Movie(getNextId(movies), 'Movie D', 2022, 3, 90, 'P,D'))

// DIRECTOR
const addNewDirector = document.getElementById("addNewDirector");
const dialogDirector = document.getElementById("dialogDirector")
const formDirector = document.getElementById("formDirector");
const closeDialogDirector = document.getElementById("closeDialogDirector")

directors.push(new Director(getNextId(directors), 'Maria', new Date(), 'England'));
directors.push(new Director(getNextId(directors), 'John', new Date(), 'England'))
directors.push(new Director(getNextId(directors), 'Pedro', new Date(), 'Portugal'))

addNewDirector.addEventListener('click', () => {
    dialogDirector.showModal()
})
closeDialogDirector.addEventListener("click", e => {
    dialogDirector.close();
})

formDirector.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("directorName").value;
    const birth = document.getElementById("directorBirth").value;
    const country = document.getElementById("directorCountry").value;

    const director = new Director(name, birth, country);

    directors.push(director)
    renderDirectors();
    dialogDirector.close()
})

function renderDirectors() {
    let html = "";
    for (let director of directors) {
        html += `<option value="${director.id}">${director.name}</option>`
    }
    document.getElementById("movieDirector").innerHTML = html;

}

renderDirectors();

function renderTable() {
    let html = "";
    for (let movie of movies) {
        let director = directors.find(d => d.id == movie.director);
        html += `<tr>
            <td>${movie.title}</td>
            <td>${director.name}</td>
            <td>${movie.year}</td>
            <td>${movie.duration}</td>
            <td>${movie.actors.join(', ')}</td>
        </tr>`
    }
    document.getElementById("tableBody").innerHTML = html;
}

renderTable()


function getMovieTitlesByDirector(directorName) {
    const director = directors.find(direc => direc.name == directorName);
    if (!director) return alert("Director not found");

    return movies.filter(movie => movie.director == director.id).map(movie => movie.title).join(", ");
}
console.log(getMovieTitlesByDirector('John'))

function getMovieTitlesByActor(actorName) {
    return movies
        .filter(movie => movie.actors.some(actor => actor == actorName))
        .map(movie => movie.title);
}

console.log(getMovieTitlesByActor('B'))

function getMovieTitlesByDirectorCountry(country) {
    return movies.map(movie => {
        movie.director = directors.find(d => d.id == movie.director)
        return movie
    }).filter(movie => movie.director.country == country).map(movie => movie.title);
}
// console.log(getMovieTitlesByDirectorCountry('Portugal'))

function getDirectorMostMovies() {
    let helper = {};
    for (let movie of movies) {
        if (helper[movie.director])
            helper[movie.director]++
        else
            helper[movie.director] = 1
    }

    let directorId = Object.keys(helper).reduce((dId, key) => {
        if (helper[key] > helper[dId])
            return key;
        return dId;
    }, 1)
    return directorId
}

console.log(getDirectorMostMovies())