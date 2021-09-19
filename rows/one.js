/**********************************************************************************************************************
 *                                     functions for 1 row of keyboard entries
 * 
 ***********************************************************************************************************************/
import { state } from '../state.js';
// TODO: functions for all keyboard functions
function shift()
{
    if (state.shift === 'down')
    {
        state.shift = 'up';
        document.getElementById("displayShift").style.backgroundColor = 'white';
    }
    else
    {
        state.shift = 'down';
        document.getElementById("displayShift").style.backgroundColor = 'gray';
    }
}

function littleEndian()
{ //function convert only

}

function integer()
{ //TODO method needed
    state.resultLower.pop();
    state.resultLower.push(0);
}

function modeBin()
{
    if (state.display === 'bin')
    {
        state.display = 'normal';
        document.getElementById("displayBinary").style.backgroundColor = 'gray';
    }
    else
    {
        state.display = 'bin';
        document.getElementById("displayBinary").style.backgroundColor = 'white';
    }
}

function modeHex()
{
    if (state.factor === 16)
    {
        state.factor = 10; //TODO need to show hex/dec entry mode
        document.getElementById("displayHex").innerHTML = 'Dec';
        document.getElementById("displayHex").style.backgroundColor = 'gray';
        document.getElementById("displayHex").style.color = 'black';
    }
    else
    {
        state.factor = 16;
        document.getElementById("displayHex").innerHTML = 'Hex';
        document.getElementById("displayHex").style.backgroundColor = '#440000';
        document.getElementById("displayHex").style.color = 'white';
    }
}
export { shift, littleEndian, integer, modeBin, modeHex }