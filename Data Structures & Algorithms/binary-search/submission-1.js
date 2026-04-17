class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        for(const [index, num] of nums.entries()){
            if (num === target) {
                return index
            }
        }
        return -1
    }
}
