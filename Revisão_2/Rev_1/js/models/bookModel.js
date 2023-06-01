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
        if(this.paginaAtual < this.paginaTotal)
        {
            this.paginaAtual += 1
        }
    }

    backward()
    {
        if(this.paginaAtual > 0)
        {
            this.paginaAtual -= 1
        }
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

//Setor F1
export function booksGender(array)
{
    let res = []
    //let gender =  prompt("Digite o genero que deseja")
    let gender = "romance"
    array.forEach(book => 
    {
        if(book.genero.toLowerCase() == gender)
        {
            res.push(book)
        }
    })
    console.table(res)
}

//Setor F2
export function booksStarted(array)
{
    let res = 0
    res = array.filter(book => book.paginaAtual > 0).length
    console.log(res)
}
//Setor F3
export function nPagesReaded(array)
{
    let res = 0
    res = array.reduce((total,book) => total += book.paginaAtual,0)
    console.log(res)
}

//Setor F4
export function bookHalfRead(array)
{
    let res = []
    array.forEach(book => 
    {
        if(book.paginaAtual > (book.paginaTotal/2))
        {
            res += book.titulo + ", "
        }
    })
    console.log(res)
}

//Setor F5
export function bookAutor()
{
    let bookSearch = prompt("Nome do livro")
    let res = prompt("Nome do autor?")
    let temp = ""
    array.forEach(book => 
    {
        temp = book.autor
        if(bookSearch.toLowerCase() == book.titulo.toLowerCase())
        {
            console.log(bookSearch)
            if(!temp == "")
            {
                console.log("Com autor")
                //alert(temp)
            }
            else
            {
                console.log("Sem autor")
                //console.log(book)
                book.author = res
                console.log(book)
            }
        }
    })
}
