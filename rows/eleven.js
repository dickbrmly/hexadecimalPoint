/**********************************************************************************************************************
 *                                    functions for all 11 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state, display, clear } from '../state.js';
import { or } from './six.js';

function zero()
{
    if (state.number === 0) return;
    state.keyEntry(0);
}

function period()
{
    state.direction = 'below';
    state.entry.push('.');
    display();
}

export { zero, period }