/**********************************************************************************************************************
 *                                    functions for all 6 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state, display } from '../state.js';

function f()
{
    if (state.factor === 16) state.keyEntry(15);
}

function or()
{
    state.func('or');
}

function and()
{
    state.func('and');
}

function back()
{ //TODO: need method here

}


export { f, or, and, back }