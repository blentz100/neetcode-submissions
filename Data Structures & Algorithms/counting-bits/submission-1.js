class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const res = [];
        while(n >= 0){
            let i = n;
            let subTotal = 0;
            while(i){
                if(i & 1){
                    subTotal++;
                }
                i >>= 1;
            }
            res.push(subTotal)
            n--;
        }
        return res.reverse();
}}