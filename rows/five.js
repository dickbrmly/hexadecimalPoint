/**********************************************************************************************************************
 *                                    functions for all 5 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state, display, clear } from '../state.js';
/***********************************************************************************************************************/
function push()
{
    state.store.push(parseFloat(state.entry.join('')));
    clear();
    display();
}
/***********************************************************************************************************************/
function pop()
{
    if (state.store.length < 1) return;
    state.entryD = state.store.pop();
    let str = state.entryD.toString(state.factor);
    state.entry = str.split('');
    display();
}
/***********************************************************************************************************************/
function top()
{
    if (state.store.length < 1) return;
    if (state.shift)
    {
        state.store.push(state.store.shift());
    }
    state.entryD = state.store.pop();
    state.store.push(state.entryD);
    state.entry = state.entryD.toString(state.factor).split('');
    display();
}
/***********************************************************************************************************************/
function nor()
{
    state.func('nor');
}
/***********************************************************************************************************************/
function nand()
{
    state.func('nand');
}
/***********************************************************************************************************************/
export { push, pop, top, nor, nand }