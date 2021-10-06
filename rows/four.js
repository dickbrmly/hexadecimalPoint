/**********************************************************************************************************************
 *                                    functions for all 4 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state, display } from '../state.js';
/***********************************************************************************************************************/
function mask()
{
    if (state.shift)
    {
        state.mask = state.entryD;
    }
    else
    {
        let result = state.entryD;
        result = result & state.mask;
        state.entryD = result;
        state.entry = result.toString(state.factor).split('');
        state.equal = true;
    }
    state.equal = true;
    display();
}
/***********************************************************************************************************************/
function priv()
{ //TODO priv needed
    if (state.shift)
    {
        state.private = parseInt(state.entry.join(''));
    }
    else
    {
        let result = parseInt(state.entry.join(''));
        state.entry = result.toString(state.factor).split('');
    }
    state.equal = true;
    display();
}
/***********************************************************************************************************************/
function pub()
{ //TODO pub needed
    if (state.shift)
    {
        state.public = parseInt(state.entry.join(''));
    }
    else
    {
        let result = parseInt(state.entry.join(''));

        state.entry = result.toString(state.factor).split('');
    }
    state.equal = true;
    display();
}
/***********************************************************************************************************************/
function xxor() { state.func('xxor'); }
/***********************************************************************************************************************/
function shiftLeft()
{
    if (state.shift) { state.entryD = state.entryD / 2 }
    else { state.entryD = state.entryD * 2; }
    state.entry = state.entryD.toString(state.factor).split('');
    state.equal = true;
    display();
}
/***********************************************************************************************************************/
export { mask, priv, pub, xxor, shiftLeft }