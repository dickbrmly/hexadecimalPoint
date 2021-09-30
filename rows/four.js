/**********************************************************************************************************************
 *                                    functions for all 4 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state, display } from '../state.js';

function mask()
{
    if (state.shift)
    {
        state.mask = parseInt(state.entry.join(''));
    }
    else
    {
        let result = parseInt(state.entry.join(''));
        result = result & state.mask;
        state.entry = result.toString().split('');
        display();
    }
}

function priv()
{ //TODO priv needed
    if (state.shift)
    {
        state.private = parseInt(state.entry.join(''));
    }
    else
    {
        let result = parseInt(state.entry.join(''));

        state.entry = result.toString().split('');
        display();
    }
}

function pub()
{ //TODO pub needed
    if (state.shift)
    {
        state.public = parseInt(state.entry.join(''));
    }
    else
    {
        let result = parseInt(state.entry.join(''));

        state.entry = result.toString().split('');
        display();
    }
}

function xxor()
{
    state.func('xxor');
}

function shiftLeft()
{
    if (state.shift)
    {
        let number = parseFloat(state.entry.join(''));
        number = number / 2;
        state.entry = number.toString().split('');
    }
    else
    {
        let number = parseFloat(state.entry.join(''));
        number = number * 2;
        state.entry = number.toString().split('');
    }
    display();
}
export { mask, priv, pub, xxor, shiftLeft }