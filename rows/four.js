/**********************************************************************************************************************
 *                                    functions for all 4 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state, display } from '../state.js';

function mask()
{
    if (state.mode === 'down')
    {
        state.mode = 'up';
        document.getElementById("displayShift").style.backgroundColor = 'white';
    }
    else
    {
        state.mode = 'down';
        document.getElementById("displayShift").style.backgroundColor = 'gray';
    }
}

function priv()
{ //TODO priv needed

}

function pub()
{ //TODO pub needed

}

function xxor()
{
    state.func('xxor');
}

function shiftLeft()
{
    let number = parseFloat(state.entry.join(''));
    number = number * 2;
    state.entry = number.toString().split('');
    display();
}
export { mask, priv, pub, xxor, shiftLeft }