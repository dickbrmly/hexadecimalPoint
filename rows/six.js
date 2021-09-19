/**********************************************************************************************************************
 *                                    functions for all 6 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state } from '../state.js';

function f()
{
    state.keyEntry(15);
}

function or()
{ //TODO method needed

}

function and()
{ //TODO method needed

}

function back()
{
    if (state.display === 'bin')
    {
        state.display = 'normal';
        document.getElementById("displayBinary").style.backgroundColor = 'gray';
    }
    else
    {
        state.display = 'binary';
        document.getElementById("displayBinary").style.backgroundColor = 'white';
    }
}

function clear()
{
    state.direction = 'above';
    state.func = 'add';
    state.upper.pop();
    state.upper.push(0);
    state.lower.pop()
    state.lower.push(0);
    document.getElementById("decimalDisplay").innerHTML = state.upper.peek() + '.' + state.lower.peek();
}
export { f, or, and, back, clear }