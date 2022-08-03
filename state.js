/**********************************************************************************************************************
 *                                    functions for all 8 row keyboard entries 
 * 
 ***********************************************************************************************************************/
class Calculator
{
    mask = 0xF0F0;
    private = 3;
    public = 7;
    common = 33;
    factor = 10; //or hex
    method = []; //add sub mul div mod 
    entry = [];
    entryD = 0;
    store = [];
    value = [ 0 ];
    position = 0;
    bin = false;
    complex = false;
    error = false;
    below = false;
    shift = false; //or up
    equal = false;
    deg = false;

    keyEntry(value)
    {
        if (this.error)
        {
            error();
            return;
        };

        if (this.complex)
        {
            this.value = [];
            this.entry = [];
            this.entryD = 0;
            this.complex = false;
        }

        if (this.equal)
        {
            this.value = [];
            this.entry = [];
            this.entryD = 0;
            this.below = false;
            this.position = 0;
            this.equal = false;
        }

        let number = 0;
        switch (value)
        {
            case '.':
                if (state.entry.length < 1) state.entry.push('0');
                state.entry.push('.');
                return;
            case 'a':
                number = 10;
                break;
            case 'b':
                number = 11;
                break;
            case 'c':
                number = 12;
                break;
            case 'd':
                number = 13;
                break;
            case 'e':
                number = 14;
                break;
            case 'f':
                number = 15;
                break;
            default:
                number = value;
                break;
        }

        this.entry.push(value);

        if (this.below)
        {
            number = number * Math.pow(this.factor, this.position - 1);
            this.entryD += number;
            this.position -= 1;
            display();
        }
        else
        {
            if (state.entry.length < 1) number = 0;
            this.entryD = this.entryD * this.factor + number;
            display();
        }
    }
}
/*********************************************************************************************************************/
Calculator.prototype.func = function (entry)
{
    if (this.method.length > 0) { equal(); }
    this.method.push(entry);
    this.value.push(this.entryD);
    this.entry = [];
    this.entryD = 0;
    this.below = false;
    this.position = 0;
    this.equal = false;
    //this.entry = this.value.peek().toString().split('');
}
/*********************************************************************************************************************/
let state = new Calculator();
/*********************************************************************************************************************/
function display2(type)
{

    let ftop = parseInt(state.value[ 0 ]);
    let resolve = state.value[ 0 ] - ftop;
    let fbottom = 0;

    while (resolve > .000000001)
    {
        resolve *= 16;
        fbottom *= 0x10;
        fbottom += parseInt(resolve);
        resolve = resolve - parseInt(resolve);
    }

    let top = parseInt(state.value[ 1 ]);
    resolve = state.value[ 1 ] - top;
    let bottom = 0;

    while (resolve > .000000001)
    {
        resolve *= 16;
        bottom *= 0x10;
        bottom += parseInt(resolve);
        resolve = resolve - parseInt(resolve);
    }

    if (type === 'rectangular')
    {
        document.getElementById("decimalDisplay").innerHTML = state.value[ 0 ].toString(10) + " + " + 'i' + state.value[ 1 ].toString(10);
        document.getElementById("hexadecimalDisplay").innerHTML = ftop.toString(16) + '.' + fbottom.toString(16) + ' + ' +
            'i' + top.toString(16) + '.' + bottom.toString(16);
    }
    else
    {
        let degs = state.value[ 1 ];
        if (state.deg) degs = degs * 180 / Math.PI;
        document.getElementById("decimalDisplay").innerHTML = state.value[ 0 ].toString(10) + " < " + degs.toString(10);
        document.getElementById("hexadecimalDisplay").innerHTML = ftop.toString(16) + '.' + fbottom.toString(16) + ' < ' +
            top.toString(16) + '.' + bottom.toString(16);
    }
}
//document.getElementById("decimalDisplay").innerHTML = state.value.peek().toString(10);

/***********************************************************************************************************************/
function display1()
{
    document.getElementById("decimalDisplay").innerHTML = state.entryD.toString(2);
    document.getElementById("hexadecimalDisplay").innerHTML = state.entryD.toString(16);
}
/*********************************************************************************************************************/
/***********************************************************************************************************************/
function display()
{

    if (state.factor === 10)
    {
        if (state.entry.length < 1) document.getElementById("decimalDisplay").innerHTML = 0;
        else document.getElementById("decimalDisplay").innerHTML = state.entry.join('');

        document.getElementById("hexadecimalDisplay").innerHTML = state.entryD.toString(16);
    }
    else
    {
        if (state.entry.length < 1) document.getElementById("hexadecimalDisplay").innerHTML = 0;
        else document.getElementById("hexadecimalDisplay").innerHTML = state.entry.join('');
        document.getElementById("decimalDisplay").innerHTML = state.entryD.toString(10);
    }
}
/*********************************************************************************************************************/
Array.prototype.peek = function ()
{
    if (this.length > 0)
    {
        return this[ this.length - 1 ];
    }
    // empty array... 
    return undefined; // or another default value... 
};
/*********************************************************************************************************************/
function clear()
{
    state.disp = 'normal';
    document.getElementById("displayError").style.backgroundColor = 'gainsboro';
    state.error = false;
    state.below = false;
    state.pressEqual = false;
    state.position = 0;
    state.direction = 'above';
    state.method = [];
    state.value = [];
    state.entryD = 0;
    state.entry = [];
    display();
}
/*********************************************************************************************************************/
function equal()
{
    if (state.equal) return;
    if (state.value.length < 2) state.value.push(state.entryD);
    if (state.value.length < 2) return;

    let number2 = state.value.pop();
    let number = state.value.pop();

    switch (state.method.pop())
    {
        case 'xxor':
            number = number ^ number2;
            state.value.push(number);
            break;

        case 'rec':
            if (state.complex)
            {
                let radius = Math.pow(number * number + number2 * number2, 0.5);
                let angle = Math.atan(number / number2);
                state.value.push(radius);
                state.value.push(angle);
                display2('angular')
                state.complex = true;

            }
            else
            {
                state.value.push(number);
                state.value.push(number2);
                display2('rectangular');
                state.complex = true;
            }
            return;

        case 'pol':
            if (state.deg) number2 = number2 * Math.PI / 180;
            let base = number * Math.sin(number2);
            let opposite = number * Math.cos(number2);
            state.value.push(opposite);
            state.value.push(base);
            display2('polar');
            return;

        case 'r':
            number = parseFloat(number) * parseFloat(number) + parseFloat(number2) * parseFloat(number2);
            number = Math.pow(number, 0.5);
            state.value.push(number);
            break;

        case '^':
            number = Math.pow(number, number2);
            state.value.push(number);
            break;

        case 'nand':
            number = parseFloat(number) & parseFloat(number2);;
            state.value.push(~number);
            break;

        case 'and':
            number = parseFloat(number) & parseFloat(number2);;
            state.value.push(number);
            break;

        case 'nor':
            number = ~number & ~number2;
            state.value.push(number);
            break;

        case 'or':
            number = parseFloat(number) | parseFloat(number2);;
            state.value.push(number);
            break;

        case 'mod':
            number = parseFloat(number) % parseFloat(number2);
            2;
            state.value.push(number);
            break;

        case '/':
            number = parseFloat(number) / parseFloat(number2);;
            state.value.push(number);
            break;

        case '*':
            number = parseFloat(number) * parseFloat(number2);;
            state.value.push(number);
            break;

        case '-':
            number = parseFloat(number) - parseFloat(number2);;
            state.value.push(number);
            break;

        default:
            number = parseFloat(number) + parseFloat(number2);
            state.value.push(number);
            break;
    }
    state.entry = [];
    state.entry = state.value.pop().toString(state.factor).split('');
    state.entryD = number;
    state.equal = true;
    if (state.bin) display1();
    else display();
}
/***********************************************************************************************************************/
function error()
{
    state.error = true;
    document.getElementById("displayError").style.backgroundColor = 'white';
}
/***********************************************************************************************************************/
export { state, display, display1, clear, equal, error };