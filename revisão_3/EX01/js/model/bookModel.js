export class Book
{
    titulo = ""
    genero = ""
    autores = ""
    totalPaginas = 0
    paginaAtual = 0

    constructor(titulo,genero,autores,totalPaginas = 0,paginaAtual = 0)
    {
        this.titulo = titulo;
        this.genero = genero;
        this.autores = autores;
        this.totalPaginas = totalPaginas;
        this.paginaAtual = paginaAtual;
    }
    /*titulo*/
    get _titulo()
    {
        return this.titulo
    }
    set _titulo(val)
    {
        this.titulo = val
    }
    /*genero*/
    get _genero()
    {
        return this.genero
    }
    set _genero(val)
    {
        this.genero = val
    }
    /*autores*/
    get _autores()
    {
        return this.autores
    }
    set _autores(val)
    {
        this.autores = val
    }
    /*totalPaginas*/
    get _totalPaginas()
    {
        return this.totalPaginas
    }
    set _totalPaginas(val)
    {
        this.totalPaginas = val
    }
    /*paginaAtual*/
    get _paginaAtual()
    {
        return this.paginaAtual
    }
    set _paginaAtual(val)
    {
        if(val > this.totalPaginas)
        {
            alert("Nº de página atual inválido")
        }
        else
        {
            this.totalPaginas = val;
        }
    }
    /*metodos*/
    forward()
    {
        if(this.paginaAtual < this.totalPaginas)
        {
            this.paginaAtual += 1
            console.log("Pagina atual: " + this.paginaAtual)
        }
    }
    backward()
    {
        if(this.paginaAtual > 0)
        {
            this.paginaAtual -= 1
            console.log("Pagina atual: " + this.paginaAtual)
        }
    }
    forwardAndBackward()
    {
        let tipo = prompt(`Digite "forward" ou "backward."`)
        let val = +prompt("Digite um numero de paginas.")
        if(tipo == "forward")
        {
            this.paginaAtual += val
        }
        else if(tipo == "backward")
        {
            this.paginaAtual -= val
        }
    }
}

import { books } from "../view/bookView.js"

export function filterGender()
{
    console.log("filterGenero")
    let genero = prompt("Genero a ser filtrado:")
    let res = books.filter( book => book.genero.toLowerCase() == genero.toLowerCase()).map( book => book.titulo).join(", ")
    console.log(`Livros de ${genero}: ${res}`)
}
export function filterStartedBooks()
{
    console.log("filterStartedBooks")
    let res = books.filter( book => book.paginaAtual > 0);//console.log(res)
    console.log(`Numeros de livros iniciados: ${res.length}`)
}
export function allNpagesRead()
{
    console.log("allNpagesRead")
    let res = books.filter( book => book.paginaAtual > 0).reduce( (pagesRead, book) => 
    {
        return pagesRead + book.paginaAtual
    },0);console.log(res)
    console.log(`Quantidade de paginas lidas: ${res}`)
}
export function halfBookRead()
{
    console.log("halfBookRead")
    let res = books.filter(book => book.paginaAtual > (book.totalPaginas)/2);console.log(res)
    let resBook = ""
    res.forEach( book => 
    {
        resBook = resBook + book.titulo + ", "
    })
    console.log(`Livros lidos mais da metade: ${resBook}`)
}
export function filterAuthor()
{
    console.log("filterAuthor")
    let bookSearch = prompt("Nome do livro")
    books.forEach(book => 
    {
        if(bookSearch.toLowerCase() == book.titulo.toLowerCase())
        {
            console.log(bookSearch)
            if ( book.autores != "")
            {
                console.log(`O livro "${book.titulo}" possui autor`)
            }
            else
            {
                console.log(`O livro "${book.titulo}" não possui autor`)
            }
        }
    })
}
