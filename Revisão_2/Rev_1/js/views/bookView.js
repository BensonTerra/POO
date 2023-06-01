import Book, { bookAutor, bookHalfRead, booksGender, booksStarted, nPagesReaded } from "../models/bookModel.js";

let books = []
const book1 = new Book("Os dias sem sorte", "Romance", "João Pais", 233, 201)
books.push(book1)
const book2 = new Book("Amor limite", "Romance", "Maria Augusta e António Coimbra", 513, 333)
books.push(book2)
const book3 = new Book("Raios", "Aventura", "Carlos Roma", 232)
books.push(book3)
console.log(books)


function renderView()
{
    let table = document.getElementById("table")
    let content = ""

    content =
    `
        <tr>
            <th>TÍTULO</th>
            <th>Nº PÁGINAS NÃO LIDAS</th>
            <th>AÇÃO A EXECUTAR</th>
            <th>TEMPO RESTANTE</th>
        </tr>
    `
    

    books.forEach(book => 
    {
        content += 
        `
        <tr>
            <th>${book.titulo}</th>
            <th>${book.paginaTotal - book.paginaAtual}</th>
            <th><button class="forward" id="${book.titulo}">forward</button><button class="backward" id="${book.titulo}">backward</button></th>
            <th class="tempoRestante">${(book.paginaTotal - book.paginaAtual)*5}</th>
        </tr>
        `
    })
    table.innerHTML = content



    let total = 0
    const tempoTotal = document.querySelectorAll(".tempoRestante")
    for(const tempoParcial of tempoTotal)
    {
        total += parseInt(tempoParcial.innerHTML)/60
    }
    //console.log(total)

    content +=
    `
    <tr>
        <th colspan = "4">tempo em horas: ${total}</th>
    </tr>
    `
    table.innerHTML = content

    const buttonsF = document.querySelectorAll(".forward")
    console.log(buttonsF)
    buttonsF.forEach((button) => 
    {
        //console.log(button)
        button.addEventListener("click", (event) => 
        {
            //console.log("button");
            // event.preventDefault();
            const book = books.find(book => book.titulo === event.target.id);
            book.forward();
            console.log(book);
            renderView();
        });
    });

    const buttonsB = document.querySelectorAll(".backward")
    console.log(buttonsB)
    buttonsB.forEach((button) => 
    {
        //console.log(button)
        button.addEventListener("click", (event) => 
        {
            //console.log("button");
            // event.preventDefault();
            const book = books.find(book => book.titulo === event.target.id);
            book.backward();
            console.log(book);
            renderView();
        });
    });
}
renderView()

const btn1 = document.getElementById("f1").addEventListener("click", () => booksGender(books))
const btn2 = document.getElementById("f2").addEventListener("click", () => booksStarted(books))
const btn3 = document.getElementById("f3").addEventListener("click", () => nPagesReaded(books))
const btn4 = document.getElementById("f4").addEventListener("click", () => bookHalfRead(books))
const btn5 = document.getElementById("f5").addEventListener("click", () => bookAutor(books))