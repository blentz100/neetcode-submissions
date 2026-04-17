class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // Use a left and right pointer
        // Iterate through the input. If current sum is greater than the target
        // then move the right pointer, else move the left pointer.
        let i = 0
        let j = numbers.length - 1
        let currentSum
        while(i < j){
            currentSum = numbers[i] + numbers[j]
            if(currentSum == target) return [i+1, j+1]
            if(currentSum > target) j--
            else i++
        }
    }
}
