import { Book, filterGender, filterStartedBooks, allNpagesRead, halfBookRead, filterAuthor } from "../model/bookModel.js";//console.log(Book)

let book = ""
export let books = []
book = new Book("Os dias sem sorte", "Romance", "João Pais", 233, 201);books.push(book)
book = new Book("Amor limite", "Romance","Maria Augusta e António Coimbra", 513, 333);books.push(book)
book = new Book("Raios", "Aventura", "Carlos Roma", 232);books.push(book)
//console.log(books)

function renderView()
{
    //console.log("renderView")

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
    table.innerHTML = content

    books.forEach(book => 
    {
        //console.log(book)
        content =
        `
            <tr>
                <th>${book.titulo}</th>
                <th>${book.totalPaginas -book.paginaAtual}</th>
                <th>
                    <button id="${book.titulo}" class="forward">AVANÇAR</button>
                    <button id="${book.titulo}" class="backward">VOLTAR</button>
                    <button id="${book.titulo}" class="go_to">IR PARA</button>
                </th>
                <th><span id="tempoRestante">${(book.totalPaginas - book.paginaAtual)*5}</span> minutos</th>
            </tr>
        `
        table.innerHTML += content
    })

    let buttonF = document.querySelectorAll(".forward");//console.log(buttonF)
    buttonF.forEach( button => 
    {
        //console.log(button)
        button.addEventListener("click", (event) => 
        {
            let book = books.find(book => book.titulo === event.target.id);//console.log(book)
            book.forward()
            renderView()
        })
    })

    let buttonB = document.querySelectorAll(".backward");//console.log(buttonB)
    buttonB.forEach( button => 
    {
        //console.log(button)
        button.addEventListener("click", (event) => 
        {
            let book = books.find(book => book.titulo === event.target.id);//console.log(book)
            book.backward()
            renderView()
        })
    })

}
renderView()

let btn1 = document.getElementById("f1").addEventListener("click",filterGender)
let btn2 = document.getElementById("f2").addEventListener("click",filterStartedBooks)
let btn3 = document.getElementById("f3").addEventListener("click",allNpagesRead)
let btn4 = document.getElementById("f4").addEventListener("click",halfBookRead)
let btn5 = document.getElementById("f5").addEventListener("click",filterAuthor)