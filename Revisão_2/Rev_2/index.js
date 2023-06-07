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
const formMovie = document.getElementById("formMovie");
const movieTitle = document.getElementById("movieTitle");
const movieYear = document.getElementById("movieYear");
const movieDirector = document.getElementById("movieDirector");
const movieDuration = document.getElementById("movieDuration");
const movieActors = document.getElementById("movieActors"); 
/*----------------------------------------------------------------*/
const formDirector = document.getElementById("formDirector")
const directorName = document.getElementById("directorName")
const DirectorBirth = document.getElementById("directorBirth")
const directorCountry = document.getElementById("directorCountry")
const closeDialogDirector = document.getElementById("closeDialogDirector")
