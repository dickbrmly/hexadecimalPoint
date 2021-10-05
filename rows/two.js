/**********************************************************************************************************************
 *                                    functions for all 2 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state, display } from '../state.js';

function recipocate()
{

    let number = state.entryD;
    number = 1 / number;
    state.entryD = number;
    state.entry = number.toString(state.factor).split('');
    display();
    state.equal = true;
}

function radius()
{
    state.func('r');
}

function naturalExponent()
{
    let number = state.entryD;
    number = Math.exp(number);
    state.entryD = number;
    state.entry = number.toString(state.factor).split('');
    display();
    state.equal = true;
}

function ln()
{
    let number = state.value.pop();
    number = Math.log(number);
    state.value.push(number);
    display();
    state.equal = true;
}

function abs()
{
    let number = state.value.pop();
    number = Math.abs(number);
    state.value.push(number);
    display();
    state.equal = true;
}
export { recipocate, radius, naturalExponent, ln, abs }