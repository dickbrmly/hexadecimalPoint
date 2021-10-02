/**********************************************************************************************************************
 *                                    functions for all 8 row keyboard entries 
 * 
 ***********************************************************************************************************************/
class Calculator
{
    mask = 0x0;
    private = 0x0;
    public = 0x0;
    factor = 10; //or hex
    disp = 'normal'; //or binary
    method = []; //add sub mul div mod 
    entry = [];
    store = [];
    value = [0];
    position = 0;
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

        if (this.equal)
        {
            this.entry = [];
            this.equal = false;
            document.getElementById("displayBinary").style.backgroundColor = 'gray';
        }

        if (this.below)
        {
            var number = value * Math.pow(this.factor, this.position - 1);
            var number2 = parseFloat(this.entry.join(''));
            if (Number.isNaN(number2)) number2 = 0;
            number += number2;
            this.entry = number.toString().split('');
            this.position -= 1;
            display();
        }
        else
        {
            var number = parseFloat(this.entry.join(''));
            if (state.entry.length < 1) number = 0;

            number = number * this.factor + value;
            this.entry = number.toString().split('');
            display();
        }
    }
}
/*********************************************************************************************************************/
Calculator.prototype.func = function(entry)
{
    if (this.method.length > 0) { equal(); }
    this.method.push(entry);
    this.value.push(parseFloat(this.entry.join('')));
    this.entry = [];
    this.below = false;
    this.position = 0;
    //this.entry = this.value.peek().toString().split('');
}
/*********************************************************************************************************************/
let state = new Calculator();
/*********************************************************************************************************************/
function display2(type)
{
    let ftop = parseInt(state.value[0]);
    let resolve = state.value[0] - ftop;
    let fbottom = 0;

    while (resolve > .000000001)
    {
        resolve *= 16;
        fbottom *= 0x10;
        fbottom += parseInt(resolve);
        resolve = resolve - parseInt(resolve);
    }

    let top = parseInt(state.value[1]);
    resolve = state.value[1] - top;
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
        document.getElementById("decimalDisplay").innerHTML = state.value[0].toString(10) + " + " + state.value[1].toString(10) + 'i';
        document.getElementById("hexadecimalDisplay").innerHTML = ftop.toString(16) + '.' + fbottom.toString(16) + ' + ' +
            top.toString(16) + '.' + bottom.toString(16);
    }
    else
    {
        document.getElementById("decimalDisplay").innerHTML = state.value[0].toString(10) + " < " + state.value[1].toString(10);
        document.getElementById("hexadecimalDisplay").innerHTML = ftop.toString(16) + '.' + fbottom.toString(16) + ' < ' +
            top.toString(16) + '.' + bottom.toString(16);
    }
}
//document.getElementById("decimalDisplay").innerHTML = state.value.peek().toString(10);

/***********************************************************************************************************************/
function display1(value)
{
    document.getElementById("decimalDisplay").innerHTML = state.entry.join('');
    document.getElementById("hexadecimalDisplay").innerHTML = value;
}
/*********************************************************************************************************************/
/***********************************************************************************************************************/
function display() //TODO: fix hex entry
{
    let number = () =>
    {

        let value = parseFloat(state.entry.join(''));
        if (Number.isNaN(value)) return 0;
        else return value;
    }
    document.getElementById("decimalDisplay").innerHTML = number().toString();
    document.getElementById("hexadecimalDisplay").innerHTML = number().toString(16);
}
/*********************************************************************************************************************/
Array.prototype.peek = function()
{
    if (this.length > 0)
    {
        return this[this.length - 1];
    }
    // empty array... 
    return undefined; // or another default value... 
};
/*********************************************************************************************************************/
function clear()
{
    document.getElementById("displayError").style.backgroundColor = 'gray';
    state.error = false;
    state.below = false;
    state.pressEqual = false;
    state.position = 0;
    state.direction = 'above';
    state.method = [];
    state.value = [];
    state.entry = [];
    display();
}
/*********************************************************************************************************************/
function equal()
{
    if (state.value.length < 2) state.value.push(parseFloat(state.entry.join('')));
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
            let radius = Math.pow(number * number + number2 * number2, 0.5);
            let angle = Math.atan(number / number2);
            state.value.push(radius);
            state.value.push(angle);
            display2('angular')
            return;

        case 'pol':
            let base = number * Math.sin(number2);
            let opposite = number * Math.cos(number2);
            state.value.push(opposite);
            state.value.push(base);
            display2('rectangular');
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

        case 'and':
            number = parseFloat(number) & parseFloat(number2);;
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
    state.entry = state.value.pop().toString().split('');
    state.equal = true;
    display();
}
/***********************************************************************************************************************/
function error()
{
    state.error = true;
    document.getElementById("displayError").style.backgroundColor = 'white';
}
/***********************************************************************************************************************/
export { state, display, display1, clear, equal, error };