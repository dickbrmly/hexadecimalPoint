/**********************************************************************************************************************
 *                                     functions for 1 row of keyboard entries
 * 
 ***********************************************************************************************************************/
import { state, display, display1 } from '../state.js';
// TODO: functions for all keyboard functions
function shift()
{
    if (!state.shift)
    {
        state.shift = true;
        document.getElementById("hex").innerHTML = "Rad|Deg"; // row 3
        document.getElementById("hex").style.color = 'white';
        document.getElementById("displayShift").style.backgroundColor = 'white';
        document.getElementById("sin").innerHTML = "Arcsin"; // row 3
        document.getElementById("sin").style.color = "white"; // row 3
        document.getElementById("cos").innerHTML = "Arccos"; // row 3;
        document.getElementById("cos").style.color = "white"; // row 3
        document.getElementById("tan").innerHTML = "Arctan"; // row 3;;
        document.getElementById("tan").style.color = "white"; // row 3
        document.getElementById("mask").innerHTML = "Save Mask"; // row 3;4
        document.getElementById("mask").style.color = "white"; // row 3
        document.getElementById("private").innerHTML = "Save Private"; // row 
        document.getElementById("private").style.color = "white"; // row 33;
        document.getElementById("public").innerHTML = "Save Public"; // row 3;
        document.getElementById("public").style.color = "white"; // row 3
        document.getElementById("shiftLeft").innerHTML = ">>"; // row 3;
        document.getElementById("shiftLeft").style.color = "white"; // row 3

        document.getElementById("top").innerHTML = "Rotate"; // row 3;
        document.getElementById("top").style.color = "white"; // row 3
    }
    else
    {
        state.shift = false;
        document.getElementById("hex").innerHTML = "Hex|Dec"; // row 3
        document.getElementById("hex").style.color = 'black';
        document.getElementById("sin").innerHTML = "Sin"; // row 3
        document.getElementById("sin").style.color = "black"; // row 3
        document.getElementById("cos").innerHTML = "Cos"; // row 3;        
        document.getElementById("cos").style.color = "black"; // row 3
        document.getElementById("tan").innerHTML = "Tan"; // row 3;;
        document.getElementById("tan").style.color = "black"; // row 3
        document.getElementById("mask").innerHTML = "Mask"; // row 3;4
        document.getElementById("mask").style.color = "black"; // row 3
        document.getElementById("private").innerHTML = "Private"; // row 3;
        document.getElementById("private").style.color = "black"; // row 3
        document.getElementById("public").innerHTML = "Public"; // row 3;
        document.getElementById("public").style.color = "black"; // row 3
        document.getElementById("shiftLeft").innerHTML = "<<"; // row 3;
        document.getElementById("shiftLeft").style.color = "black"; // row 3
        document.getElementById("displayShift").style.backgroundColor = 'gray';
        document.getElementById("top").innerHTML = "Top"; // row 3;
        document.getElementById("top").style.color = "black"; // row 3
    }
}

function integer()
{
    let number = parseFloat(state.entry.join(''));
    number = parseInt(number);
    state.entry = number.toString().split('');
    display();
}

function modeBin()
{
    let value = state.entry.join('');
    let number = parseFloat(value, state.factor).toString(2);
    let str = number.toString(2);
    state.entry = str.split('');
    state.equal = true;
    display1(parseFloat(value).toString(16));
    document.getElementById("displayBinary").style.backgroundColor = 'white';
}

function modeHex()
{
    if (!state.shift)
    {
        {
            if (state.factor === 16)
            {
                state.factor = 10; //TODO need to show hex/dec entry mode
                document.getElementById("displayHex").innerHTML = 'Dec';
                document.getElementById("displayHex").style.backgroundColor = 'gray';
            }
            else
            {
                state.factor = 16;
                document.getElementById("displayHex").innerHTML = 'Hex';
                document.getElementById("displayHex").style.backgroundColor = 'white';
            }
        }
    }
    else
    {
        if (state.deg)
        {
            state.deg = false; //TODO need to show hex/dec entry mode
            document.getElementById("displayDeg").innerHTML = 'Rad';
            document.getElementById("displayDeg").style.backgroundColor = 'gray';
        }
        else
        {
            state.deg = true;
            document.getElementById("displayDeg").innerHTML = 'Deg';
            document.getElementById("displayDeg").style.backgroundColor = 'white';
        }
    }
}
export { shift, integer, modeBin, modeHex }