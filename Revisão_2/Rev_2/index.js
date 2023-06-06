import Movie ,{ movies, renderView } from "./movie.js";
import Director ,{ directors, renderViewDirector} from "./director.js";
/*----------------------------------------------------------------*/
const showButton = document.getElementById('showDialog');
const dialogMovie = document.getElementById('dialogMovie');
showButton.addEventListener('click', (event) => 
{
    event.preventDefault();
    dialogMovie.showModal();
});
/*----------------------------------------------------------------*/
const addNewDirector = document.getElementById('addNewDirector')
const dialogDirector = document.getElementById('dialogDirector')
addNewDirector.addEventListener('click', (event) =>
{
    event.preventDefault();
    dialogDirector.showModal()
})
/*----------------------------------------------------------------*/
const movie1 = new Movie("The Shawshank Redemption", 1994, "Frank Darabont", 142, ["Tim Robbins", "Morgan Freeman"]);
const movie2 = new Movie("Inception", 2010, "Christopher Nolan", 148, ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]);
const movie3 = new Movie("Pulp Fiction", 1994, "Quentin Tarantino", 154, ["John Travolta", "Samuel L. Jackson", "Uma Thurman"]);
const movie4 = new Movie("Inglourious Basterds",2009,"Quentin Tarantino",153,["Brad Pitt", "Christoph Waltz", "Diane Kruger"]);
movies.push(movie1);
movies.push(movie2);
movies.push(movie3);
movies.push(movie4);
renderView()
/*----------------------------------------------------------------*/
const director1 = new Director("Frank Darabont", "28 de janeiro de 1959", "Estados Unidos");
const director2 = new Director("Christopher Nolan", "30 de julho de 1970", "Reino Unido");
const director3 = new Director("Quentin Tarantino", "27 de março de 1963", "Estados Unidos");
directors.push(director1);
directors.push(director2);
directors.push(director3);
renderViewDirector()
/*----------------------------------------------------------------*/
