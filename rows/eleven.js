/**********************************************************************************************************************
 *                                    functions for all 11 row keyboard entries 
 * 
 ***********************************************************************************************************************/
import { state, display } from '../state.js';
import { or } from './six.js';

function zero()
{
    if (state.number === 0) return;
    state.keyEntry(0);
}

function period() { state.direction = 'below'; }

function equal()
{
    let number2 = state.value.pop();
    let number = state.value.pop();

    switch (state.method.pop())
    {
        case 'and':
            number = number & number2;
            state.value.push(number);
            break;

        case 'or':
            number = number | number2;
            state.value.push(number);
            break;

        case 'mod':
            number = number % number2;
            state.value.push(number);
            break;

        case '/':
            number /= number2;
            state.value.push(number);
            break;

        case '*':
            number *= number2;
            state.value.push(number);
            break;

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