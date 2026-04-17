class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let numsSet = new Set(nums)
        
        let result = 0

        for(const num of nums){
            let curr = num;
            let streak = 0;
            while(numsSet.has(curr)){
                streak++
                curr++
            }
            result = Math.max(streak, result)
        }

        return result; 
    }
}
