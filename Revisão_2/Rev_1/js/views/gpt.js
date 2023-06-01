import Book, { bookAutor, bookHalfRead, booksGender, booksStarted, nPagesReaded } from "../models/bookModel.js";

const books = [
    new Book("Os dias sem sorte", "Romance", "João Pais", 233, 201),
    new Book("Amor limite", "Romance", "Maria Augusta e António Coimbra", 513, 333),
    new Book("Raios", "Aventura", "Carlos Roma", 232)
];

function renderBooksTable() {
    const table = document.getElementById("table");
    let content = `
        <tr>
            <th>TÍTULO</th>
            <th>Nº PÁGINAS NÃO LIDAS</th>
            <th>AÇÃO A EXECUTAR</th>
            <th>TEMPO RESTANTE</th>
        </tr>
    `;

    books.forEach(book => {
        const remainingPages = book.paginaTotal - book.paginaAtual;
        const tempoRestante = remainingPages * 5;

        content += `
            <tr>
                <td>${book.titulo}</td>
                <td>${remainingPages}</td>
                <td>
                    <button class="forward" data-id="${book.titulo}">forward</button>
                    <button class="backward" data-id="${book.titulo}">backward</button>
                </td>
                <td class="tempoRestante">${tempoRestante}</td>
            </tr>
        `;
    });

    table.innerHTML = content;
}

function updateTotalTime() {
    let total = 0;
    const tempoTotal = document.querySelectorAll(".tempoRestante");

    tempoTotal.forEach(tempoParcial => {
        total += parseInt(tempoParcial.innerHTML) / 60;
    });

    const totalTimeRow = `
        <tr>
            <td colspan="4">tempo em horas: ${total}</td>
        </tr>
    `;

    table.innerHTML += totalTimeRow;
}

function handleButtonClick(event) {
    const bookTitle = event.target.dataset.id;
    const book = books.find(book => book.titulo === bookTitle);

    if (event.target.classList.contains("forward")) {
        book.forward();
    } else if (event.target.classList.contains("backward")) {
        book.backward();
    }

    console.log(book);
    renderBooksTable();
    updateTotalTime();
}

function attachEventListeners() {
    const table = document.getElementById("table");
    table.addEventListener("click", event => {
        if (event.target.matches(".forward, .backward")) {
            handleButtonClick(event);
        }
    });
}

renderBooksTable();
updateTotalTime();
attachEventListeners();

document.getElementById("f1").addEventListener("click", () => booksGender(books));
document.getElementById("f2").addEventListener("click", () => booksStarted(books));
document.getElementById("f3").addEventListener("click", () => nPagesReaded(books));
document.getElementById("f4").addEventListener("click", () => bookHalfRead(books));
document.getElementById("f5").addEventListener("click", () => bookAutor(books));
