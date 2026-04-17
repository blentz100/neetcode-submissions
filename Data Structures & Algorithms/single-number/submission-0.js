class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {

        let result = 0
        nums.forEach((num) => {
            console.log('num is: ', num)
            console.log('num.toString(2) is: ', num.toString(2))
            console.log('result is: ', result)
            console.log('result.toString(2) is: ', result.toString(2))
            result = num ^ result
            console.log('result is: ', result)
            console.log('result.toString(2) is: ', result.toString(2))
            console.log(' ')
        })

        return result
    }
}
