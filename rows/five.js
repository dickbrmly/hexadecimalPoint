/**********************************************************************************************************************
 *                                    functions for all 5 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state } from '../state.js';

function push()
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

function pop()
{ //TODO method needed

}

function top()
{ //TODO method needed

}

function nor()
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

function nand()
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
export { push, pop, top, nor, nand }