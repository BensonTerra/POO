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

    get _cor() 
    {
        return this.#cor;
    }
    set _cor(value) 
    {
        this.#cor = value;
    }

    get _combutivelAtual() {
        return this.#combutivelAtual
    }
    set _combutivelAtual(value)
    {
        console.log(value);
        let tempValue = 0
        if(value < 0) 
        {
            tempValue = 0;
        }
        else if(value < this.#combustivelMaximo) 
        {
            tempValue = value
        }
        this.#combutivelAtual = tempValue
    }

    get
}

function EX02()
{
    console.log("ES07---EX01")
    const car1 = new Car('Nissan', '91-GH-15', 'Green', 40, 60, 5, 'Diesel')

    console.table(car1)

    console.log(car1._cor)
    car1._cor = "rosa"
    console.log(car1._cor)

    console.log(car1._combutivelAtual)
    car1._combutivelAtual = 20
    console.log(car1._combutivelAtual)


}
EX02()


