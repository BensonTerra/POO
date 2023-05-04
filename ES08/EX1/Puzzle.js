export class Puzzle
{
    #name = ""
    #dificuldade = ""
    #solved = false
    #txtQuestao = ""
    #respostas = []
    #respostaIndex = 0

    constructor(name, dificuldade, solved=false, txtQuestao, respostas, respostaIndex)
    {
        this.#name = name;
        this.#dificuldade = dificuldade
        this.#solved = solved
        this.#txtQuestao = txtQuestao
        this.#respostas = respostas
        this.#respostaIndex = respostaIndex
    }

    get _name()
    {
        return this.#name
    }

    get _dificuldade()
    {
        return this.#dificuldade
    }

    get _solved()
    {
        return this.#solved
    }

    get _txtQuestao()
    {
        return this.#txtQuestao
    }

    get _respostas()
    {
        return this.#respostas
    }

    get _respostaIndex()
    {
        return this.#respostaIndex
    }
}