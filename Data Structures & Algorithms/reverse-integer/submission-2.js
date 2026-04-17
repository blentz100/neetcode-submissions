class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let MIN = -(Math.pow(2, 31))    //  4294967295
        let MAX = (Math.pow(2,31) - 1); // -4294967296
        let res = 0;
        let digit = 0;

        while(x){
            digit = x % 10;
            x = Math.trunc(x / 10);
            console.log('x is: ', x)
            if((res > MAX / 10) || 
                (res === MAX / 10 && digit >= MAX % 10)){
                return 0;
            }
            if((res < MIN / 10) ||
                (res === MIN / 10 && digit <= MIN % 10)){
                    return 0;
            }

            res = (res * 10) + digit
        }

        return res;
    }
}
