/**********************************************************************************************************************
 *                                    functions for all 2 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state } from '../state.js';

function recipocate()
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

function radius()
{ //TODO method needed

}

function naturalExponent()
{ //TODO method needed

}

function ln()
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

function abs()
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
export { recipocate, radius, naturalExponent, ln, abs }