const movies = 
[
    {
        title: 'The Shawshank Redemption',
        genre: 'Drama',
        year: 1994,
        cover: 'https://m.media-amazon.com/images/I/519NBNHX5BL.jpg',
        trailer: 'https://www.youtube.com/embed/6hB3S9bIaco',
    },
    {
        title: 'The Godfather',
        genre: 'Drama',
        year: 1972,
        cover: 'https://m.media-amazon.com/images/I/41+HJCUl3EL.jpg',
        trailer: 'https://www.youtube.com/embed/5DO-nDW43Ik',
    },
    {
        title: 'The Godfather1',
        genre: 'Drama',
        year: 1972,
        cover: 'https://m.media-amazon.com/images/I/41+HJCUl3EL.jpg',
        trailer: 'https://www.youtube.com/embed/5DO-nDW43Ik',
    },
    {
        title: 'The Godfather2',
        genre: 'Drama',
        year: 1972,
        cover: 'https://m.media-amazon.com/images/I/41+HJCUl3EL.jpg',
        trailer: 'https://www.youtube.com/embed/5DO-nDW43Ik',
    },
];

console.table(movies);

//--//--**
const txtMovieName = document.getElementById('addTitle');
//console.log(txtMovieName.value);
//---//
const txtMovieGenre = document.getElementById('addGenre');
//console.log(txtMovieGenre.value);
//---//
const txtMovieYear = document.getElementById('addYear');
//console.log(txtMovieYear.value);
const dateNow = new Date();
txtMovieYear.max = dateNow.getFullYear();
//---//
const txtMovieCover = document.getElementById('addCover');
//console.log(txtMovieCover.value);
//---//
const txtMovieTrailer = document.getElementById('addTrailer');
//console.log(txtMovieTrailer.value);
//---//--**
const addForm = document.getElementById('addForm');
//console.log(addForm);
//---//
const tblBody = document.getElementById('tableBody');
//console.log(tblBody);
//---//---//
const dialogCover = document.getElementById('dialogCover');
//console.log(dialogCover);
//--//
const dialogTrailer = document.getElementById('dialogTrailer');
//console.log(dialogTrailer);
//--//--**

function renderContacts()
{
    let template = '';
    for (let movie of movies)
    {
        template += 
        `
        <tr>
            <td>${movie.title}</td>
            <td>${movie.genre}</td>
            <td>
                <button onClick = "openCover('${movie.cover}')">SEE COVER</button>
                <button onClick = "openTrailer('${movie.trailer}')">SEE TRAILER</button>
                <button onClick = "removeMovie('${movie.title}')">REMOVE</button>
            </td>
        </tr>
        `
    }
    tblBody.innerHTML = template;
}
renderContacts(movies);

const frmMovieAdd = document.getElementById('addForm');
function addMovie(event)
{
    event.preventDefault();
    console.log("Function addMovie");
    const newMovie =
    {
        title: txtMovieName.value,
        genre: txtMovieGenre.value,
        year: txtMovieYear.value,
        cover: txtMovieCover.value,
        trailer: txtMovieTrailer.value,
    }
    if (movies.some(movie => movie.title === newMovie.title))
    {
        return alert("Movie already exists");
    }
    
    movies.push(newMovie);
    renderContacts();
    console.table(movies);
    addForm.reset();
    return true;
}
frmMovieAdd.addEventListener('submit', function(event){addMovie(event)});

function removeMovie(title)
{
    const index = movies.findIndex(movie => movie.title === title);
    console.log(index);
    movies.splice(index, 1);
    console.table(movies);
    renderContacts();
}

function openCover(source)
{
    const img = document.querySelector('img');
    img.src = source;
    console.log(img);
    dialogCover.showModal();/*      .showModal()        */
}

function openTrailer(source)
{
    const iFrame = document.querySelector('iframe');
    iFrame.src = source;
    console.log(iFrame);
    dialogTrailer.showModal();/*      .showModal()        */
}

