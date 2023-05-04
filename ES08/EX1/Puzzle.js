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

const puzzle1 = new Puzzle('Math Puzzle', 'hard', 'What is the result of 3 x 7', [1, 2, 14, 21], 4)
const puzzle2 = new Puzzle('Geography Puzzle', 'medium', 'Which city is the capital of france', ['Lisbon', 'Madrid', 'Paris', 'Rome'], 3)
const puzzle3 = new Puzzle('Quiz Puzzle', 'easy', 'Which animal is the Mickey Mouse', ['Cat', 'Dog', 'Mouse', 'Rabbit'], 3)
const puzzle4 = new Puzzle('One Letter Puzzle', 'hard', 'Which letter denotes the roman numeral for 100', ['C', 'X', 'V', 'I'], 1);