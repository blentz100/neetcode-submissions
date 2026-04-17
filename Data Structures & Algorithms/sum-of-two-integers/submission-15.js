class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        // we need to use & and ^
        // & gets us the carry
        // ^ gets us the sum, keep going until no more carry

        let carry;
        while(carry !== 0){
            console.log('inside carry')
            carry = (a & b) << 1;
            a = a ^ b;
            b = carry;
        }
        console.log('about to return a: ', a)
        return a

    }
}
