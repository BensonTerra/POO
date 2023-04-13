let gessList = 
[
    '00-CC-00',
    '01-CC-01',
    '02-CC-02',
    '03-CC-03',
    '04-CC-04',
    '05-CC-05',
    '06-CC-06',
    '07-CC-07',
    '08-CC-08',
    '09-CC-09'
]
//console.table(gessList)

let parkList = 
[
    
]
//console.table(parkList)

//--//--**
const txtMatricula = document.getElementById('inputMatricula')
//console.log(txtMatricula)
txtMatricula.value = '00cc00'
//--//
const txtTipo = document.getElementById('inputTipo')
//console.log(txtTipo)
//--//
const addForm = document.getElementById('addForm');
//console.log(addForm);
//---//
const tblBody = document.getElementById('tableBody');
//console.log(tblBody);
//---//

function renderLista()
{
    let template = '';
    let status = ""
    for (let placa of gessList)
    {
        if (parkList.includes(placa) == true)
        {
            status = "🔴"
        }
        else
        {
            status = "🟢"
        }
        template += 
        `
        <tr>
            <td>${placa}</td>
            <td>${status}</td>
        </tr>
        `
    }
    tblBody.innerHTML = template;
}
renderLista()

function gerenciamento(event)
{
    event.preventDefault();
    let placa  = `${txtMatricula.value[0]}${txtMatricula.value[1]}-${txtMatricula.value[2].toUpperCase()}${txtMatricula.value[3].toUpperCase()}-${txtMatricula.value[4]}${txtMatricula.value[5]}`
    //console.log(placa)

    if(txtTipo.value == "E")
    {
        //console.log(txtMatricula.value)
        
        if (parkValidator(placa) == true)
        {
            parkList.push(placa)
            console.table(parkList)
            renderLista()
            mensagem()
        }
        else
        {
            return
        }
    }
    else if(txtTipo.value == "S")
    {
        //console.log(txtMatricula.value)
        
        if (parkValidator(placa) == true)
        {
            let indexPark = parkList.indexOf(placa)
            console.log(indexPark)
            remove(indexPark)
        }
    }
}
addForm.addEventListener('submit', function(event) {gerenciamento(event)});

function parkValidator(item)
{
    if (txtTipo.value == "E")
    {
        if (parkList.includes(item) == false)
        {
            return true
        }
        else
        {
            return alert("Placa já cadastrada")
        }
    }
    else if(txtTipo.value == "S")
    {
        if (parkList.includes(item) == true)
        {
            return true
        }
    }
}

function remove(index)
{
    parkList.splice(index, 1)
    renderLista()
    mensagem()
}

function mensagem()
{
    alert(`O estacionamento tem ${parkList.length} carros cadastrados`)
}