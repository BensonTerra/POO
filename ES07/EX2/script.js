class Car 
{
    #marca = ""
    #placa = ""
    #cor = ""
    #combutivelAtual = 0
    #combustivelMaximo = 0
    #consumo = 0
    #tipoCombustivel = ""

    constructor(marca, placa, cor, combutivelAtual, combustivelMaximo, consumo, tipoCombustivel)
    {
        this.#marca = marca
        this.#placa = placa
        this.#cor = cor
        this.#combutivelAtual = combutivelAtual
        this.#combustivelMaximo = combustivelMaximo
        this.#consumo = consumo
        this.#tipoCombustivel = tipoCombustivel
    }
}

const car1 = new Car()