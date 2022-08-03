/**********************************************************************************************************************
 *                                     functions for 1 row of keyboard entries
 * 
 ***********************************************************************************************************************/
import { state, display, display1 } from '../state.js';

function shift()
{
    if (!state.shift)
    {
        state.shift = true;
        document.getElementById("xor").innerHTML = "Save Common"; // row 3
        document.getElementById("xor").style.backgroundColor = 'white';
        document.getElementById("hex").innerHTML = "Rad|Deg"; // row 3
        document.getElementById("hex").style.backgroundColor = 'white';
        document.getElementById("displayShift").style.backgroundColor = 'white';
        document.getElementById("sin").innerHTML = "Arcsin"; // row 3
        document.getElementById("sin").style.backgroundColor = "white"; // row 3
        document.getElementById("cos").innerHTML = "Arccos"; // row 3;
        document.getElementById("cos").style.backgroundColor = "white"; // row 3
        document.getElementById("tan").innerHTML = "Arctan"; // row 3;;
        document.getElementById("tan").style.backgroundColor = "white"; // row 3
        document.getElementById("mask").innerHTML = "Save Mask"; // row 3;4
        document.getElementById("mask").style.backgroundColor = "white"; // row 3
        document.getElementById("private").innerHTML = "Save Private"; // row 
        document.getElementById("private").style.backgroundColor = "white"; // row 33;
        document.getElementById("public").innerHTML = "Save Public"; // row 3;
        document.getElementById("public").style.backgroundColor = "white"; // row 3
        document.getElementById("shiftLeft").innerHTML = ">>"; // row 3;
        document.getElementById("shiftLeft").style.backgroundColor = "white"; // row 3
        document.getElementById("top").innerHTML = "Rotate"; // row 3;
        document.getElementById("top").style.backgroundColor = "white"; // row 3
        document.getElementById("1/x").innerHTML = "negate"; // row 2
        document.getElementById("1/x").style.backgroundColor = "white"; // row 2
        document.getElementById("e^x").innerHTML = "&#960"; // row 2
        document.getElementById("e^x").style.backgroundColor = "white"; // row 2
    }
    else
    {
        state.shift = false;
        document.getElementById("xor").innerHTML = "Xor"; // row 3
        document.getElementById("xor").style.backgroundColor = '#dcdcdc';
        document.getElementById("hex").innerHTML = "Hex|Dec"; // row 3
        document.getElementById("hex").style.backgroundColor = '#dcdcdc';
        document.getElementById("tan").innerHTML = "Tan"; // row 3;;
        document.getElementById("tan").style.backgroundColor = "#dcdcdc"; // row 3
        document.getElementById("sin").innerHTML = "Sin"; // row 3
        document.getElementById("sin").style.backgroundColor = "#dcdcdc"; // row 3
        document.getElementById("cos").innerHTML = "Cos"; // row 3;
        document.getElementById("cos").style.backgroundColor = "#dcdcdc"; // row 3
        document.getElementById("mask").innerHTML = "Mask"; // row 3;4
        document.getElementById("mask").style.backgroundColor = "#dcdcdc"; // row 3
        document.getElementById("private").innerHTML = "Private"; // row 3;
        document.getElementById("private").style.backgroundColor = "#dcdcdc"; // row 3
        document.getElementById("public").innerHTML = "Public"; // row 3;
        document.getElementById("public").style.backgroundColor = "#dcdcdc"; // row 3
        document.getElementById("shiftLeft").innerHTML = "<<"; // row 3;
        document.getElementById("shiftLeft").style.backgroundColor = "#dcdcdc"; // row 3
        document.getElementById("displayShift").style.backgroundColor = '#dcdcdc';
        document.getElementById("top").innerHTML = "Top"; // row 3;
        document.getElementById("top").style.backgroundColor = "#dcdcdc"; // row 3
        document.getElementById("1/x").innerHTML = "1/x"; // row 2
        document.getElementById("1/x").style.backgroundColor = "#dcdcdc"; // row 2
        document.getElementById("e^x").innerHTML = "e<sup>x</sup>"; // row 2
        document.getElementById("e^x").style.backgroundColor = "#dcdcdc"; // row 2
    }
}

function integer()
{
    let number = state.entryD;
    number = parseInt(number);
    state.entryD = number;
    if (state.factor === 10) state.entry = number.toString(10).split('');
    else state.entry = number.toString(16).split('');
    display();
}

function modeBin()
{
    if (state.bin)
    {
        state.bin = false;
        display();
        document.getElementById("displayBinary").style.backgroundColor = 'gray';
    }
    else
    {
        state.bin = true;
        display1(state.entryD.toString(16));
        document.getElementById("displayBinary").style.backgroundColor = 'white';
    }

}

function modeHex()
{
    if (!state.shift)
    {
        {
            if (state.factor === 16)
            {
                state.factor = 10;
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
            state.deg = false;
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