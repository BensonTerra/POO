export default class Book
{
    titulo = "";
    genero = "";
    autor = "";
    paginaTotal = 0;
    paginaAtual = 0;

    constructor(titulo,genero,autor,paginaTotal,paginaAtual = 0) 
    {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = autor;
        this.paginaTotal = paginaTotal;
        this.paginaAtual = paginaAtual;
    }

    //Setor TITULO
    get title()
    {
        return this.titulo;
    }
    set title(value)
    {
        this.titulo = value;
    }
    //Setor GENERO
    get gender()
    {
        return this.genero;
    }
    set gender(value)
    {
        this.genero = value;
    }
    //Setor AUTOR
    get author()
    {
        return this.autor;
    }
    set author(value)
    {
        this.autor = value;
    }
    //Setor PAGINATOTAL
    get pagsTotal()
    {
        return this.paginaTotal;
    }
    set pagsTotal(value)
    {
        this.paginaTotal = value;
    }
    //Setor PAGINAATUAL
    get pagActual()
    {
        return this.paginaAtual;
    }
    set pagActual(value)
    {
        if(value > this.paginaTotal)
        {
            alert("Nº de página atual inválido")
        }
        else
        {
            this.paginaTotal = value;
        }
    }

    forward()
    {
        this.paginaAtual += 1
    }

    back()
    {
        this.paginaAtual -= 1
    }

    backAndForward(tipo, quantidade)
    {
        if(tipo == "forward")
        {
            this.paginaAtual += quantidade
        }
        else if(tipo == "back")
        {
            this.paginaAtual -= quantidade
        }
    }
}

let books = []
const book1 = new Book("Os dias sem sorte", "Romance", "João Pais", 233, 201)
books.push(book1)
const book2 = new Book("Amor limite", "Romance", "Maria Augusta e António Coimbra", 513, 333)
books.push(book2)
const book3 = new Book("Raios", "Aventura", "Carlos Roma", 232)
books.push(book3)
console.log(books)

//Setor F1
export function booksGender()
{
    let res = []
    //let gender =  prompt("Digite o genero que deseja")
    let gender = "romance"
    books.forEach(book => 
    {
        if(book.genero.toLowerCase() == gender)
        {
            res.push(book)
        }
    })
    console.log(res)
}
booksGender()

//Setor F2
export function booksStarted()
{
    let res = 0
    res = books.filter(book => book.paginaAtual > 0).length
    console.log(res)
}
booksStarted()

//Setor F3
export function nPagesReaded()
{
    let res = 0
    res = books.reduce((total,book) => total += book.paginaAtual,0)
    console.log(res)
}
nPagesReaded()

//Setor F4
export function bookHalfRead()
{
    let res = []
    
    console.log(res)
}
bookHalfRead()