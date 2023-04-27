class Rectangle
{
    _width = 0
    _height = 0
    _color = "#FFFFFF"

    constructor(width = 2,height = 1,color = "#FFFFFF") 
    {
        this._width = width
        this._height = height
        this._color = color
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    set width(value)
    {
        if(value < 0 || value >10)
        {
            console.log("Invalid value")
        }
        else
        {
            this._width = value
        }
    }

    set height(value)
    {
        if(value < 0 || value >10)
        {
            console.log("Invalid value")
        }
        else
        {
            this._height = value
        }
    }

    calcArea() 
    {
        const total = this._width * this._height
        return total;
    }

    calcPerimeter() 
    {
        const total = 2 * this._width + 2 * this._height
        return total
    }
}

console.log("|---|")
const rec1 = new Rectangle()
console.log(rec1.calcArea())
console.log(rec1.calcPerimeter())
console.log("---")
const rec2 = new Rectangle(10,5)
console.log(rec2.calcArea())
console.log(rec2.calcPerimeter())
console.log("|---|")
console.log(rec1.width)
rec1.width = -1