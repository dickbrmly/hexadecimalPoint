/**********************************************************************************************************************
 *                                    functions for all 3 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state, display } from '../state.js';

function sin()
{
    let number = parseFloat(state.entry.join(''));
    number = Math.sin(number);
    state.entry = number.toString().split('');
    state.equal = true;
    display();
}

function cos()
{
    let number = parseFloat(state.entry.join(''));
    number = Math.cos(number);
    state.entry = number.toString().split('');
    state.equal = true;
    display();
}

function tan()
{ //TODO method needed
    let number = parseFloat(state.entry.join(''));
    number = Math.tan(number);
    state.entry = number.toString().split('');
    state.equal = true;
    display();
}

function rectangular()
{
    state.func('rec');
}

function polor()
{
    state.func('pol');
}
export { sin, cos, tan, rectangular, polor }