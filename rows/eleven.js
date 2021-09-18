/**********************************************************************************************************************
 *                                    functions for all 11 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state } from '../state.js';

function zero()
{
    if (state.upper + state.lower === 0) return;
    state.keyEntry(0);
}

function period()
{
    if (this.direction === 'below') this.direction = 'above';
    else this.direction = 'below';
}

function equal()
{ //TODO method needed

}
export { zero, period, equal }