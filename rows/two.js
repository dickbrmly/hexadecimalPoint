/**********************************************************************************************************************
 *                                    functions for all 2 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state, display } from '../state.js';

function recipocate()
{

    let number = parseFloat(state.entry.join(''));
    number = 1 / number;
    state.entry = number.toString().split('');
    display();
}

function radius()
{ //TODO: calc radius
    state.func('r');
}

function naturalExponent()
{
    let number = state.value.pop();
    number = Math.exp(number);
    state.value.push(number);
    display();
}

function ln()
{
    let number = state.value.pop();
    number = Math.log(number);
    state.value.push(number);
    display();
}

function abs()
{
    let number = state.value.pop();
    number = Math.abs(number);
    state.value.push(number);
    display();
}
export { recipocate, radius, naturalExponent, ln, abs }