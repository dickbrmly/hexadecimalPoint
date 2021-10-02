/**********************************************************************************************************************
 *                                    functions for all 5 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state, display } from '../state.js';

function push()
{
    state.store.push(parseFloat(state.entry.join('')));
}

function pop()
{
    var number = state.store.pop();
    let str = number.toString();
    state.entry = str.split('');
    display();
}

function top()
{
    if (state.shift)
    {
        var number = 0;
        state.store.unshift(state.store.pop());
        var number = state.store.pop();
        state.store.push(number);
        state.entry = number.toString().split('');
        display();
    }
    else
    {
        var number = state.store.pop();
        state.store.push(number);
        state.entry = number.toString().split('');
        display();
    }
}

function nor()
{
    state.func('nor');
}

function nand()
{
    state.func('nand');
}
export { push, pop, top, nor, nand }