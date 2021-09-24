/**********************************************************************************************************************
 *                                    functions for all 4 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state } from '../state.js';

function mask()
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

function priv()
{ //TODO priv needed

}

function pub()
{ //TODO pub needed

}

function xxor()
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

function shiftLeft()
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
export { mask, priv, pub, xxor, shiftLeft }