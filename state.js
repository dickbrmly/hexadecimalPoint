/**********************************************************************************************************************
 *                                    functions for all 8 row keyboard entries 
 * 
 ***********************************************************************************************************************/
class Calculator
{
    shift = 'down'; //or up
    factor = 10; //or hex
    disp = 'normal'; //or binary
    method = []; //add sub mul div mod 
    entry = [];
    value = [0];
    equal = false;

    keyEntry(value)
    {
        if (this.equal)
        {
            this.entry = [];
            this.equal = false;
        }
        this.entry.push(value);
        display();
    }
}
/*********************************************************************************************************************/
Calculator.prototype.func = function(entry)
{
    if (this.method.length > 0) { equal(); }
    this.method.push(entry);
    this.value.push(parseFloat(this.entry.join('')));
    this.entry = [];

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
        bottom *= 0x10;
        bottom += parseInt(resolve);
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
function display1()
{
    document.getElementById("decimalDisplay").innerHTML = state.value.peek().toString(10);

    let top = parseInt(state.value.peek());

    let resolve = state.value.peek() - top;
    let bottom = 0;

    while (resolve > .000000001)
    {
        resolve *= 16;
        bottom *= 0x10;
        bottom += parseInt(resolve);
        resolve = resolve - parseInt(resolve);
    }
    document.getElementById("hexadecimalDisplay").innerHTML = top.toString(16) + '.' + bottom.toString(16);
}
/*********************************************************************************************************************/
/***********************************************************************************************************************/
function display()
{
    let string = state.entry.join("");
    if (string === '')
    {
        document.getElementById("decimalDisplay").innerHTML = new String('0');
        document.getElementById("hexadecimalDisplay").innerHTML = '0' + '.' + '0';
        return;
    }
    else document.getElementById("decimalDisplay").innerHTML = new String(string);

    let top = parseInt(string);
    let resolve = parseFloat(string) - top;
    let bottom = 0;

    while (resolve > .000000001)
    {
        resolve *= 16;
        bottom *= 0x10;
        bottom += parseInt(resolve);
        resolve = resolve - parseInt(resolve);
    }
    document.getElementById("hexadecimalDisplay").innerHTML = top.toString(16) + '.' + bottom.toString(16);
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
        case 'rec':
            let radius = Math.pow(number * number + number2 * number2, 0.5);
            let angle = Math.atan(number / number2);
            state.value.push(radius);
            state.value.push(angle);
            display2('angular')
            break;

        case 'pol':
            let base = number * Math.sin(number2);
            let opposite = number * Math.cos(number2);
            state.value.push(opposite);
            state.value.push(base);
            display2('rectangular');
            break;

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
export { state, display, clear, equal };