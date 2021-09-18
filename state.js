/**********************************************************************************************************************
 *                                    functions for all 8 row keyboard entries 
 * 
 ***********************************************************************************************************************/
class Calculator
{
    constructor()
    {
        this.shift = 'down'; //or up
        this.factor = 10; //or hex
        this.display = 'normal'; //or binary
        this.func = 'add'
        this.upper = [0];
        this.lower = [0];
        this.direction = 'above'; //below for below decimal or hexidecimal point
    }
    keyEntry(value)
    {
        if (this.direction === 'above')
        {
            let working = this.upper.pop() * this.factor + parseInt(value, this.factor);
            this.upper.push(working);
        }
        else
        {
            let working = this.lower.pop() / this.factor + parseInt(value, this.factor);
            this.lower.push(working);
        }
        document.getElementById("decimalDisplay").innerHTML = this.upper.peek() + '.' + this.lower.peek();
    }

    functionEntry(func)
    {
        this.upper.push(0);
        this.lower.push(0);
        this.func = func;
    }

    display()
    {
        document.getElementById("decimalDisplay").innerHTML = this.upper.peek() + '.' + this.lower.peek();
    }
}
/**********************************************************************************************************************
 *                                    functions for all 8 row keyboard entries 
 * 
 ***********************************************************************************************************************/
Array.prototype.peek = function()
{
    if (this.length > 0)
    {
        return this[this.length - 1];
    }
    // empty array... 
    return undefined; // or another default value... 
};
/**********************************************************************************************************************
 *                                                             Stack class
 * 
 ***********************************************************************************************************************/
class Stack
{
    // Array is used to implement stack 
    constructor()
    {
        this.stack = [0];
    }
    // push function 
    push(element)
    {
        // push element into the stack
        this.stack.push(element);
    }
    pop()
    {

    }
    // pop function 
    peek()
    {
        // return top most element in the stack 
        // and removes it from the stack 
        // Underflow if stack is empty 
        if (this.stack.length == 0)
            return "Underflow";
        return this.stack.pop();
    }
    // length function 
    length()
    {
        // return stack legth
        return this.stack.length;
    }
    // isEmpty function 
    isEmpty()
    {
        // return true if stack is empty 
        return this.stack.length === 0;
    }
    // printStack function
    printStack()
    {
        var stringBuilder = "";
        for (var item = 0; item < this.stack.length; item++)
            stringBuilder += `
            $ { item }: ` + this.stack[item] + '\n';
        return stringBuilder;
    }
}

export { Calculator, Stack };