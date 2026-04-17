class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let res = 0; // we need to start with all zeros

        for(let i = 0; i < 32; i++){
            let currentBit = (n >>> i) & 1
            console.log('currentBit: ', currentBit)
            
            res = res | (currentBit << (31 - i))
            console.log(res.toString(2))

            // console.log('res is: ', res.toString(2))
        }

        return res >>> 0;
    }
}
