class Band
{
    name = "";
    gender = "";
    linkCapa = "";
    descricao = "";
    linkVideo = "";

    constructor(name, gender, linkCapa, descricao, linkVideo)
    {
        this.name = name;
        this.gender = gender;
        this.linkCapa = linkCapa
        this.descricao = descricao
        this.linkVideo = linkVideo
    }
}

let bands = [];
export function initDataBands()
{
    console.log("function initDataBand")

    if(!localStorage.bands)
    {
    let band = ""
    band =  new Band(
        "Muse",
        "Pop-Rock",
        "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/b/9/c/6/b9c663834bfaa66bfc81ab2ac754a628.jpg",
        "The best band ever",
        "xxx",
    )
    bands.push(band)
    //console.table(bands)

    band = new Band(
        "RadioHead",
        "Pop-Rock",
        "https://ep01.epimg.net/elpais/imagenes/2017/05/17/icon/1495017818_647155_1495125183_noticia_normal.jpg",
        "Great songs!",
        "xxx",
    )
    bands.push(band)
    //console.table(bands)
    
    band = new Band(
        "James",
        "Pop-Rock",
        "http://ksassets.timeincuk.net/wp/uploads/sites/55/2013/01/2012JamesBandPress181212-2.jpg",
        "The 90's were amazing!",
        "xxx",
    )
    bands.push(band)
    //console.table(bands)

    band = new Band(
        "Metallica",
        "Metal",
        "https://images.impresa.pt/blitz/2016-08-19-metallica.jpg/original/mw-860",
        "Too much metal for my head",
        "xxx",
    )
    bands.push(band)
    //console.table(bands)

    band = new Band(
        "Placebo",
        "Pop-Rock",
        "https://i.ytimg.com/vi/9aIYBSiAEDk/0.jpg",
        "Brian Molko is a star!",
        "xxx",
    )
    
    bands.push(band)
    console.table(bands)
    console.log("injecting")
    localStorage.setItem("bands", JSON.stringify(bands))
    }
}

export function init()
{
    if (localStorage.bands == true)
    {
        bands = JSON.parse(localStorage.getItem("bands"))
        console.log(bands)
    }
    else
    {
        bands = []
    }
}

export function getBands()
{
    //console.log(JSON.parse(localStorage.getItem("bands")));
    return JSON.parse(localStorage.getItem("bands"))
}