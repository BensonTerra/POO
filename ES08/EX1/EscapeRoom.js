export class EscapeRoom
{
    #name = ""
    #image  = ""
    #puzzles = [] //lista com objetos
    #puzzlesCompletos = 0

    constructor(name, image)
    {
        this.#name = name;
        this.#image = image;
    }

    get _name()
    {
        return this.#name;
    }
    set _name(value)
    {
        this.#image = value;
    }

    get _image()
    {
        return this.#image;
    }
    set _image(value)
    {
        this.#image = value;
    }

    get _puzzles()
    {
        return this.#puzzles;
    }

    addPuzzle(puzzle)
    {
        this.#puzzles.push(puzzle);
    }

    isSolved()
    {
        return this.#puzzlesCompletos === this.#puzzles.length
    }

    solvePuzzle(index)
    {
        const puzzle = this._puzzles[index]
        console.log("solvePuzzle")
        if (!puzzle.solved)
        {
            puzzle.solve()
            this.#puzzlesCompletos += 1
            if (this.isSolved())
            {
                alert(`Você escapou da ${this._name}`)
            }
            else
            {
                alert(`Você resolveu o puzzle ${this._name}`)
            }
        }
    }
}