let products = 
[
    {
        name: "batata",
        quantity: 2,
    }
]

//--//--**
const txtProductName = document.getElementById('nameProduct');
//console.log(txtProductName.value);
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
const ulList = document.getElementById('itemList');
console.log(ulList);

function renderLista()
{
    let template = '';
    for (let product of products)
    {
        template += 
        `
        <tr>
            <td>${product.name}</td>
            <td>${product.quantity}</td>
        </tr>
        `
    }
    tblBody.innerHTML = template;
//------------------------------------------------------//
    ulList.innerHTML = ""
    products.forEach((item, index) => 
    {
        const listItem = document.createElement("li")
        listItem.textContent = `${item.name} | ${item.quantity}`

        listItem.addEventListener("click", () =>
        {
            removeProduct(index)
        })
        ulList.appendChild(listItem)
    })
}
renderLista()

function addProduct(event)
{
    event.preventDefault()
    const newProduct = 
    {
        name: txtProductName.value,
        quantity: +intProduct.value,
    }
    if (products.some(product => product.name === newProduct.name))
    {
        return alert("Produto já esta na lista")
    }
    products.push(newProduct)
    renderLista()
    console.table(products) 
    addForm.reset()
}
addForm.addEventListener("submit",function(event){addProduct(event)})

function removeProduct(index)
{
    products.splice(index, 1)

    renderLista()
}