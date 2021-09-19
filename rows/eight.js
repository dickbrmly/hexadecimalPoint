/**********************************************************************************************************************
 *                                    functions for all 8 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state } from '../state.js';

function seven()
{
    state.keyEntry(7);
}

function eight()
{
    state.keyEntry(8);
}

function nine()
{
    state.keyEntry(9);
}

function exp()
{
    state.func('exp');
}

function mod()
{
    state.func('mod');
}
export { seven, eight, nine, exp, mod }