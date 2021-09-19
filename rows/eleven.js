/**********************************************************************************************************************
 *                                    functions for all 11 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state, display } from '../state.js';

function zero()
{
    if (state.number === 0) return;
    state.keyEntry(0);
}

function period() { state.direction = 'below'; }

function equal()
{ //TODO method needed
    let number = state.value.pop();
    let number2 = state.value.pop();

    switch (state.method.pop())
    {
        case 'sub':
            number -= number2;
            state.value.push(number);
            break;

        default:
            number += number2;
            state.value.push(number);
            break;
    }
    display();
}
export { zero, period, equal }