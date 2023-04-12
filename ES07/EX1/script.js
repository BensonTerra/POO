let lista = 
[
    {
        nome: 'batata',
        genero: 'Legumes',
        quantidade: 1
    },
];

let generos = ["Frutas","legumes","Carne","Peixe","bebidas","Outro"]

console.table(lista);

//--//--**
const txtProductName = document.getElementById('nameProduct');
//console.log(txtProductName.value);
//---//
const txtProductGenre = document.getElementById('addGenre');
//console.log(txtProductGenre.value);
//---//
const intProduct = document.getElementById('addQuantity');
//console.log(intProduct.value);
//---//
const addForm = document.getElementById('addForm');
//console.log(addForm);
//---//
const tblBody = document.getElementById('tableBody');
//console.log(tblBody);
//---//
const totalProdutos = document.getElementById("nProdutos")
//console.log(totalProdutos);
//---//
const produtosPorCategoria = document.getElementById("perCategoria")
//console.log(produtosPorCategoria)
//---//
const btnTotalQuantidade = document.getElementById("totalQuantidade")
//console.log(btnTotalQuantidade)
//---//
const btnLimparLista = document.getElementById("clearLista");
//console.log(btnLimparLista)
const btnNewGenre = document.getElementById("newGenre");
//---//--**

function renderlista()
{
    let template = '';
    for (let produto of lista)
    {
        template += 
        `
        <tr>
            <td>${produto.nome}</td>
            <td>${produto.genero}</td>
            <td>${produto.quantidade}</td>
        </tr>
        `
    }
    tblBody.innerHTML = template;
}
renderlista(lista);

function addProduct(event)
{
    event.preventDefault();
    console.log("Function addProduct");
    const newProduct =
    {
        nome: txtProductName.value,
        genero: txtProductGenre.value,
        quantidade: intProduct.value
    }
    if (lista.some(produto => produto.nome === newProduct.nome))
    {
        return alert("produto já existe");
    }
    
    lista.push(newProduct);
    renderlista();
    console.table(lista);
    addForm.reset();
    return true;
}
addForm.addEventListener('submit', function(event){addProduct(event)});

function totalProdutosLista()
{
    console.log(lista.length)
    alert(`Total Produtos = ${lista.length}`)
}
totalProdutos.addEventListener("click",totalProdutosLista)

function mensagemCategoria()
{
    let categoriaPrompt = prompt("Insira a categora que deseja filtrar")
    //console.log(categoriaPrompt)

    let filtroCategoria = lista.filter(item => item.genero === categoriaPrompt)

    alert(`A lista tem ${filtroCategoria.length} produtos na categoria ${categoriaPrompt}`)
}
produtosPorCategoria.addEventListener("click",mensagemCategoria)

function mensagemQuantidade()
{
    let msg = "Quantidade total = "
    let total = lista.reduce((sum, item) => sum + +item.quantidade, 0)
    msg += total
    alert(msg)
}
btnTotalQuantidade.addEventListener("click",mensagemQuantidade)

function clean()
{
    lista = []
    renderlista()
}
btnLimparLista.addEventListener("click",clean)

function newGenre()
{

}