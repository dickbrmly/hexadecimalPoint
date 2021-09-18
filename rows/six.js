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
    state.func = 'add';
    state.upper = 0;
    state.lower = 0;
    state.display();
}
export { f, or, and, back, clear }