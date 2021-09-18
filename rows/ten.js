/**********************************************************************************************************************
 *                                    functions for all 10 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { Calculator } from '../state.js';
var state = new Calculator();

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