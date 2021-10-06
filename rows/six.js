/**********************************************************************************************************************
 *                                    functions for all 6 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state, display } from '../state.js';

function f()
{
    if (state.factor === 16) state.keyEntry('f');
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
{
    if (state.entry.length < 1) return;
    state.entry.pop()

    state.entryD = parseFloatWithRadix(state.entry.join(''), state.factor);
    display();
}

function parseFloatWithRadix(s, r)
{
    r = (r || 10) | 0;
    const [b, a] = ((s || '0') + '.').split('.');
    const l1 = parseInt('1' + (a || ''), r).toString(r).length;
    return parseInt(b, r) + parseInt(a || '0', r) / parseInt('1' + Array(l1).join('0'), r);
}

export { f, or, and, back }