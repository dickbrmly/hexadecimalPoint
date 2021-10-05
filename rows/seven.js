/**********************************************************************************************************************
 *                                    functions for all 7 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state } from '../state.js';

function a()
{
    if (state.factor === 16) state.keyEntry('a');
}

function b()
{
    if (state.factor === 16) state.keyEntry('b');
}

function c()
{
    if (state.factor === 16) state.keyEntry('c');
}

function d()
{
    if (state.factor === 16) state.keyEntry('d');
}

function e()
{
    if (state.factor === 16) state.keyEntry('e');
}
export { a, b, c, d, e }