class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let res = 0; // need this to start with all 0s

        for(let i = 0; i < 32; i++){
            //Grab the rightmost bit from n, 1 at a time
            let currentBit = (n >>> i) & 1;
            console.log(currentBit)
            //Insert that bit to the leftmost spot in res
            res = res | currentBit << (31 - i)
            
            // For debugging: need to use the unsigned right shift operator: >>>
            // to conver res to an unsigned integer
            console.log('res: ', ((res) >>> 0).toString(2)) 
        }


        return res >>> 0; // bit shift >>> to make it unsigned
    }
}
