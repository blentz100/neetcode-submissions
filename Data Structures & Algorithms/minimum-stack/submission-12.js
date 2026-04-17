class MinStack {
    constructor() {
        this.stack = new Array()
        this.minStack = new Array()
    }

    // stack.at(-1) returns but doesn't remove the last element of the array

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        this.minStack.push(Math.min(val, this.minStack.at(-1) ?? val))
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
        return this.minStack.at(-1);
    }
}
