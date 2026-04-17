class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let res = 0;

        while(n){
            console.log('n is: ', n)
            console.log('n.toString(2) is: ', n.toString(2))
            if((n & 1) === 1){
                res++
            }
            n >>= 1;
        }
        return res
    }
}
