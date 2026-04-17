class MinStack {
    constructor() {
        this.stack = new Array()
        this.minStack = new Array()
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        console.log('val is: ', val)
        this.stack.push(val)
        this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1] ?? val))
    }

    /**
     * @return {void}
     */
    pop() {
       this.stack.pop()
       this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1)
    }

    /**
     * @return {number}
     */
    getMin() {
        console.log('minStack right before getMin is: ', this.minStack)
        console.log('stack right before getMin is: ', this.stack)
        return this.minStack.at(-1);
    }
}
