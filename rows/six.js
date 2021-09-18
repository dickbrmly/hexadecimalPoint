/**********************************************************************************************************************
 *                                    functions for all 6 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { Calculator } from '../state.js';
var state = new Calculator();

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
    if (state.entry === 'hex')
    {
        state.entry = 'dec'; //TODO need to show hex/dec entry mode
        document.getElementById("hex").innerHTML = 'Dec';
    }
    else
    {
        state.entry = 'hex';
        document.getElementById("displayBinary").style.backgroundColor = 'white';
    }
}
export { f, or, and, back, clear }