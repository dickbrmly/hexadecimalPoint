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
        state.private = state.entryD;
        state.equal = true;
    }
    else
    {
        state.entryD = Math.pow(state.entryD, state.private) % state.common;
        state.entry = state.entryD.toString(state.factor).split('');
        display();
        state.equal = true;
    }
}
/***********************************************************************************************************************/
function pub()
{ //TODO pub needed
    if (state.shift)
    {
        state.public = state.entryD;
        state.equal = true;
    }
    else
    {
        state.entryD = Math.pow(state.entryD, state.public) % state.common;
        state.entry = state.entryD.toString(state.factor).split('');
        display();
        state.equal = true;
    }
}
/***********************************************************************************************************************/
function xxor()
{
    if (state.shift) state.common = state.entryD;
    state.func('xxor');
}
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