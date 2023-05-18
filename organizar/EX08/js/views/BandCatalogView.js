import * as Band from "../models/BandModel.js"

Band.init()

function renderCatalog(bands = [])
{
    console.log(bands)
    let result = ""

    for (let band of bands)
    {
        //console.log(band)
        result += generateCard(band)
    }

    document.querySelector("#catalogo").innerHTML = result;
}
renderCatalog(Band.getBands())

function generateCard(band)
{
    let result = ""

    result =
    `
    <div class="card" style="width:18rem;">
        <img src="${band.linkCapa}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${band.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted ">${band.gender}</h6>
            <button id = "${band.name}" class="btn btn-primary view">Ver mais</button>

    `


    result += 
    `
        </div>
    </div>
    `
    return result
}