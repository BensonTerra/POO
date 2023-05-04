export class Puzzle
{
    #name = ""
    #dificuldade = ""
    #solved = false
    #txtQuestao = ""
    #respostas = []
    #solucao = 0

    constructor(name, dificuldade, txtQuestao, respostas, solucao)
    {
        this.#name = name;
        this.#dificuldade = dificuldade
        this.#txtQuestao = txtQuestao
        this.#respostas = respostas
        this.#solucao = solucao
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

    get _solucao()
    {
        return this.#solucao
    }

    get _solved() {
        return this.#solved;
    }
}