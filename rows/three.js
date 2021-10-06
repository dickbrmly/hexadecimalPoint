/**********************************************************************************************************************
 *                                    functions for all 3 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state, display } from '../state.js';

function sin()
{
    if (state.shift)
    {
        let number = state.entryD;
        number = Math.asin(number);
        if (state.deg) number *= 180 / Math.PI;
        state.entryD = number;
        state.entry = number.toString(state.factor).split('');
        display();
        state.equal = true;
    }
    else
    {
        let number = state.entryD;
        if (state.deg) number *= Math.PI / 180;
        number = Math.sin(number);
        state.entryD = number;
        state.entry = number.toString(state.factor).split('');
        display();
        state.equal = true;
    }
}

function cos()
{
    if (state.shift)
    {
        let number = state.entryD;
        number = Math.acos(number);
        if (state.deg) number *= 180 / Math.PI;
        state.entryD = number;
        state.entry = number.toString(state.factor).split('');
        display();
        state.equal = true;
    }
    else
    {
        let number = state.entryD;
        if (state.deg) number *= Math.PI / 180;
        number = Math.cos(number);
        state.entryD = number;
        state.entry = number.toString(state.factor).split('');
        display();
        state.equal = true;
    }
}

function tan()
{
    if (state.shift)
    {
        let number = state.entryD;
        number = Math.atan(number);
        if (state.deg) number *= 180 / Math.PI;
        state.entryD = number;
        state.entry = number.toString(state.factor).split('');
        display();
        state.equal = true;
    }
    else
    {
        let number = state.entryD;
        if (state.deg) number *= Math.PI / 180;
        number = Math.tan(number);
        state.entryD = number;
        state.entry = number.toString(state.factor).split('');
        display();
        state.equal = true;
    }
}

function rectangular()
{
    state.func('rec');
}

function polor()
{
    state.func('pol');
}
export { sin, cos, tan, rectangular, polor }