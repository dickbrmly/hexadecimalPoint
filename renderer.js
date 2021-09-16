// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

import { Calculator } from './state.js';

var state = new Calculator();

//if (state.mode === 'up') document.getElementById('multiply').innerHTML = "X<sup>Y</sup>";
//lse document.getElementById('multiply').innerHTML = "*";

document.getElementById("shift").addEventListener("click", shift);
document.getElementById("littleEndian").addEventListener("click", shift);

document.getElementById("int").addEventListener("click", shift);
document.getElementById("bin").addEventListener("click", modeBin);

function shift()
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