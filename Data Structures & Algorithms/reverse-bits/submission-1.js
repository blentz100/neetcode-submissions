class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let res = 0;

        for(let i = 0; i < 32; i++){
            let currentBit = (n >>> i) & 1;
            console.log('currentBit is: ', currentBit)
            res = res | (currentBit << (31 - i));
            console.log('res is: ', (res >>> 0).toString(2).padStart(32,'0'))

        }
        return res >>> 0;
    }
}
