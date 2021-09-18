/**********************************************************************************************************************
 *                                    functions for all 8 row keyboard entries 
 * 
 ***********************************************************************************************************************/
class Cal
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

let state = new Cal();
export { state };