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
    value = [0];
    position = 0;
    direction = 'above'; //below for below decimal or hexidecimal point

    keyEntry(value)
    {
        if (this.equal === true) clear();
        if (this.direction === 'above')
        {
            let working = this.value.pop() * state.factor + value;
            this.value.push(working);
        }
        else
        {
            this.position -= 1;
            let working = this.value.pop() + value * Math.pow(state.factor, this.position);
            this.value.push(working.toString());
        }
        display();
    }
}
/*********************************************************************************************************************/
Calculator.prototype.func = function(entry)
{
    if (state.method.length > 0) equal();
    state.value.push(0);
    state.method.push(entry);
    state.direction = 'above';
}
/*********************************************************************************************************************/
let state = new Calculator();

function display()
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
    state.position = 0;
    state.direction = 'above';
    while (state.method.length > 0) state.method.pop();
    while (state.value.length > 0) state.value.pop();
    state.value.push(0);
    display();
}
/*********************************************************************************************************************/
function equal()
{
    if (state.value.length < 2) return;
    state.position = 0;
    let number2 = state.value.pop();
    let number = state.value.pop();

    switch (state.method.pop())
    {
        case 'and':
            number = number & number2;
            state.value.push(number);
            break;

        case 'or':
            number = number | number2;
            state.value.push(number);
            break;

        case 'mod':
            number = number % number2;
            state.value.push(number);
            break;

        case '/':
            number /= number2;
            state.value.push(number);
            break;

        case '*':
            number *= number2;
            state.value.push(number);
            break;

        case '-':
            number -= number2;
            state.value.push(number);
            break;

        default:
            number += number2;
            state.value.push(number);
            break;
    }
    display();
}
/***********************************************************************************************************************/
export { state, display, clear, equal };