/**********************************************************************************************************************
 *                                    functions for all 2 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state, display } from '../state.js';

function recipocate()
{
    if (state.shift)
    {
        state.entryD *= -1;
        state.entry = state.entryD.toString(state.factor).split('');
    }
    else
    {
        let number = state.entryD;
        number = 1 / number;
        state.entryD = number;
        state.entry = number.toString(state.factor).split('');
    }
    display();
}

function radius() { state.func('r'); }

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
    let number = state.entryD;
    number = Math.log(number);
    state.entryD = number;
    state.entry = number.toString(state.factor).split('');
    display();
    state.equal = true;
}

function abs()
{
    let number = state.entryD;
    number = Math.abs(number);
    state.entryD = number;
    state.entry = number.toString(state.factor).split('');;
    display();
    state.equal = true;
}
export { recipocate, radius, naturalExponent, ln, abs }