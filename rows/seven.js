/**********************************************************************************************************************
 *                                    functions for all 7 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state } from '../state.js';

function a()
{
    if (state.factor === 16) state.keyEntry(10);
}

function b()
{
    if (state.factor === 16) state.keyEntry(11);
}

function c()
{
    if (state.factor === 16) state.keyEntry(12);
}

function d()
{
    if (state.factor === 16) state.keyEntry(13);
}

function e()
{
    if (state.factor === 16) state.keyEntry(14);
}
export { a, b, c, d, e }