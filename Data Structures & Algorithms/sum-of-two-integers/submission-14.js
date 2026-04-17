class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        let carry = 0;
        while(b !== 0){
            carry = (a & b) << 1 // need to shift left because that's what we do when we carry 1s
            a = a ^ b; // calculate the sum without the carry
            b = carry; // assign the carry to b so we can keep the loop going until the carry is done
        }
        return a;
    }
}
