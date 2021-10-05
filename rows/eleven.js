/**********************************************************************************************************************
 *                                    functions for all 11 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state, display, clear, error } from '../state.js';
import { or } from './six.js';

function zero()
{
    if (state.number === 0) return;
    state.keyEntry(0);
}

function period()
{
    if (state.below) { error(); }
    state.below = true;
    state.keyEntry('.');
}



export { zero, period }