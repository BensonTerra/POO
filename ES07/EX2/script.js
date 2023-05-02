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

    get _marca()
    {
        return this.#marca
    }
    set _marca(value) 
    {
        this.#marca = value
    }

    get _placa()
    {
        return this.#placa
    }
    set _placa(value) 
    {
        this.#placa = value
    }

    get _cor() 
    {
        return this.#cor;
    }
    set _cor(value) 
    {
        this.#cor = value;
    }

    get _combutivelAtual() 
    {
        return this.#combutivelAtual
    }
    set _combutivelAtual(value)
    {
        //console.log(value);
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

    get _consumo() 
    {
        return this.#consumo;
    }
    set _consumo(value)
    {
        this.#consumo = value
    }

    get _tipoCombustivel() 
    {
        return this.#tipoCombustivel;
    }
    set _tipoCombustivel(value)
    {
        this.#tipoCombustivel = value
    } 

    adcionarCombustivel(value)
    {
        this._combutivelAtual += value
    }

    consumoCombustivel(kms)
    {
        const combustivelUsado = (kms * this.#consumo)/100
        console.log(combustivelUsado)
        this.#combutivelAtual -= combustivelUsado
    }
}

function EX02()
{
    console.log("ES07---EX01")
    const car1 = new Car('Nissan2', '91-GH-15', 'Green', 40, 60, 5, 'Diesel');
    console.log(car1);
    const car2 = new Car('Opel', '23-AB-23', 'White', 50, 55, 6.5, 'Gasoline');
    console.log(car2);
    const car3 = new Car('Nissan', '12-CX-45', 'Black', 22, 70, 4.5, 'Diesel');
    console.log(car3);
    
    console.log("\n")

    console.log("marca")
    console.log(car1._marca)
    car1._marca = "Nissan"
    console.log(car1._marca)
    console.log("\n")

    console.log("placa")
    console.log(car1._placa)
    car1._placa = "92-GH-16"
    console.log(car1._placa)
    console.log("\n")

    console.log("Cor")
    console.log(car1._cor)
    car1._cor = "rosa"
    console.log(car1._cor)
    console.log("\n")

    console.log("combustivelMaximo")
    console.log(car1._combutivelAtual)
    car1._combutivelAtual = 20
    console.log(car1._combutivelAtual)
    console.log("\n")

    console.log("consumo")
    console.log(car1._consumo)
    car1._consumo = 6
    console.log(car1._consumo)
    console.log("\n")

    console.log("combustivel")
    console.log(car1._tipoCombustivel)
    car1._tipoCombustivel = "Gasolina"
    console.log(car1._tipoCombustivel)
    console.log("\n")

    console.log("adcionarCombustivel")
    console.log(car1._combutivelAtual)
    car1.adcionarCombustivel(10)
    console.log(car1._combutivelAtual)
    console.log("\n")

    console.log("consumoCombustivel")
    console.log(car1._combutivelAtual)
    car1.consumoCombustivel(20)
    console.log(car1._combutivelAtual)
    console.log("\n")

    const cars = [car1,car2,car3]

    function filtrarPorMarca(marca)
    {
        return cars.filter(car => car._marca === marca).length
        
    }
    console.log('Number of cars branded Nissan:', filtrarPorMarca('Nissan'));

    function filtrarPorTipoCombustivel(tipo)
    {
        
    }
}
EX02()


