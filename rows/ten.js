/**********************************************************************************************************************
 *                                    functions for all 10 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state, equal } from '../state.js';

function one()
{
    state.keyEntry(1);
}

function two()
{
    state.keyEntry(2);
}

function three()
{
    state.keyEntry(3);
}

function add()
{
    state.func('+');
}

function subtract()
{
    state.func('-');
}
export { one, two, three, add, subtract }