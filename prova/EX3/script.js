const contacts = 
[
    {
        name: "John",
        email: "john@example.com",
        phone: 123456789
    },
    {
        name: "john",
        email: "john@example.com",
        phone: 123456789
    }
]

const selectedContacts = []

const txtName = document.getElementById("addName")
console.log(txtName)

const txtEmail = document.getElementById("addEmail")
console.log(txtEmail)

const txtPhone = document.getElementById("addPhone")
console.log(txtPhone)

const addForm = document.getElementById("addForm")
const tblBody = document.getElementById("tableBody")

const numSelected = document.getElementById("nSelecionados")


function renderContacts()
{
    let template = '';

    contacts.forEach(contact => 
        {
            template +=
            `
            <tr>
                <td>${contact.name}</td>
                <td>${contact.email}</td>
                <td>${contact.phone}</td>

                <td>
                    <button onClick="editContact('${contact.name}')">EDIT</button>
                    <button onClick="deleteContact('${contact.name}')">REMOVE</button>
                    <button onClick="selectedContact('${contact.name}')">SELECT</button>
                </td>
            </tr>
            `
        })
    tblBody.innerHTML = template;
}//Função para renderizar tabela
renderContacts()

function addContacts(event)
{
    event.preventDefault();
    console.log("adding contacts")
    const newContact =
    {
        name: txtName.value,
        email: txtEmail.value,
        phone: txtPhone.value
    }
    if (contacts.some(
        contact => contact.name === newContact.name || 
        contact.email === newContact.email ||
        contact.phone === newContact.phone))
    {
        return alert("Contact already exists")
    }

    contacts.push(newContact)
    renderContacts()
    addForm.reset()
    return true
}//Função para adicionar novos contactos
addForm.addEventListener("submit",function(event){addContacts(event)})

function editContact(oldName)
{
    let index = contacts.findIndex(contact => contact.name == oldName)
    console.log(contacts[index])
    contacts[index].name = prompt("Enter your new name")
    contacts[index].email = prompt("Enter your new email address")
    contacts[index].phone = prompt("Enter your new phone number")
    renderContacts()
}//Função para alterar dados de um contato específico com elemente de rastereio o antigo nome

function deleteContact(oldName)
{
    const index = contacts.findIndex(contact => contact.name == oldName)
    contacts.splice(index, 1)
    renderContacts()
}//Função para remover um elemento na lista de contactos

function selectedContact(name)
{
    if (selectedContacts.includes(name) == true)
    {
        let index = selectedContacts.findIndex(contact => contact.name == name)
        selectedContacts.splice(index, 1);
        updateSelecteds()
    }
    else
    {
        selectedContacts.push(name)
        console.table(selectedContacts)
        updateSelecteds()
    }
}//Função permite a seleção de contatos específicos 

function updateSelecteds()
{
    numSelected.innerHTML = selectedContacts.length
}//Função permite o calculo de quantos elementos já foram selecionados