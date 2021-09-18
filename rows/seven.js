/**********************************************************************************************************************
 *                                    functions for all 7 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state } from '../state.js';

function a()
{
    state.keyEntry(10);
}

function b()
{
    state.keyEntry(11);
}

function c()
{
    state.keyEntry(12);
}

function d()
{
    state.keyEntry(13);
}

function e()
{
    state.keyEntry(14);
}
export { a, b, c, d, e }