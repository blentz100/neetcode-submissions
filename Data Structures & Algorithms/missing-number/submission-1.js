class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let a = nums[0]
        for(let i=1; i < nums.length; i++){
            a = a ^ nums[i]
        }

        let b = 0;
        for(let j = 0; j < nums.length; j++){
            b = b ^ (j + 1)
        }
        return a ^ b
        
    }
}
