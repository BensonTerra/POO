import * as Movie from "./movie";

const showButton = document.getElementById('showDialog');
const dialogMovie = document.getElementById('dialogMovie');

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener('click', () => 
{
  dialogMovie.showModal();
});

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
    
})