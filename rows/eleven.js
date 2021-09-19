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
    let number1U = state.upper.pop();
    let number1L = state.lower.pop();
    let number2U = state.upper.pop();
    let number2L = state.lower.pop();

    switch (state.method.pop())
    {
        case 'sub':
            number1U -= number2U;
            number1L -= number2L;
            state.lower.push(number1L);
            state.upper.push(number1U);
            break;

        default:
            number1U += number2U;
            number1L += number2L;
            state.lower.push(number1L);
            state.upper.push(number1U);
            break;
    }
    display();
}
export { zero, period, equal }