class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0
        let j = numbers.length - 1
        let currentSum
        while(i < j){
            currentSum = numbers[i] + numbers[j]
            console.log('currentSum is: ', currentSum)
            console.log('left side is: ', numbers[i], 'right side is: ', numbers[j])
            if(currentSum == target){
                console.log('about to return: ', [i+1, j+1] )
                return [i+1, j+1]
            }
            else if(currentSum > target){
                j--
            }
            else{
                i++
            }
           
        }
    }
}
