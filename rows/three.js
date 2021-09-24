/**********************************************************************************************************************
 *                                    functions for all 3 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state, display } from '../state.js';

function sin()
{
    let number = state.value.pop();
    number = Math.sin(number);
    state.value.push(number);
    display();
}

function cos()
{
    let number = state.value.pop();
    number = Math.cos(number);
    state.value.push(number);
    display();
}

function tan()
{ //TODO method needed
    let number = state.value.pop();
    number = Math.tan(number);
    state.value.push(number);
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