class Dice
{
    #faceValue = []
    #quantity = 0

    constructor() 
    {
        this.#faceValue = [1,2,3,4,5,6]
        this.#quantity = 6
    }

    get _faceValue() {
        return this.#faceValue;
    }

    set _faceValue(value) 
    {
        this.#faceValue = value;
    }
    
    getQuantityFaces()
    {
        return this.#quantity
    }

    roll()
    {
        const res = Math.floor(Math.random() * this.#quantity);
        return this.#faceValue[res]
    }

    decompor()
    {
        let res = []
    }
}

const obj1 = new Dice()

console.log("ES07---EX01")
//console.log(obj1._faceValue)
//console.log(obj1.roll())

let rolls = []

for(let i = 0; i < 100; i++)
{
    rolls.push(obj1.roll())
}
//console.table(rolls)

const frequency = {}
for (let i = 0; i < rolls.length; i++)
{
    frequency[rolls[i]] = (frequency[rolls[i]] || 0) + 1 //condição em linha
}
console.log(frequency)

const table = document.createElement('table')
const tableBody = document.createElement("tbody")
const firstRow = document.createElement("tr")
const faceCell = document.createElement("td")

faceCell.innerHTML = "Face"

firstRow.appendChild(faceCell)

for (let face in frequency)
{
    const td = document.createElement("td")
    td.innerHTML = face
    firstRow.appendChild(td)
}

