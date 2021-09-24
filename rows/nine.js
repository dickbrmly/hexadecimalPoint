/**********************************************************************************************************************
 *                                    functions for all 9 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state } from '../state.js';

function four()
{
    state.keyEntry(4);
}

function five()
{
    state.keyEntry(5);
}


function six()
{
    state.keyEntry(6);
}

function multiply()
{
    state.func('*');
}

function divide()
{
    state.func('/');
}
export { four, five, six, multiply, divide }