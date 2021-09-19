/**********************************************************************************************************************
 *                                    functions for all 8 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state } from '../state.js';

function seven()
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

function eight()
{
    state.keyEntry(8);
}

function nine()
{
    state.keyEntry(9);
}

function exp()
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

function mod()
{
    if (state.entry === 'hex')
    {
        state.entry = 'dec';
        document.getElementById("hex").innerHTML = 'Dec';
    }
    else
    {
        state.entry = 'hex';
        document.getElementById("displayBinary").style.backgroundColor = 'white';
    }
}
export { seven, eight, nine, exp, mod }