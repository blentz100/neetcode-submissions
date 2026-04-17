class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        if(nums.length === 1){
            return nums[0] === target ?  0 : -1
        }

        let left = 0;
        let right = nums.length - 1;

        

        while(left < right){
            let mid = Math.floor((left + right) / 2)

            console.log('left is: ', left)
            console.log('right is: ', right)
            console.log('mid is: ', mid)
            console.log(' ')


            if(nums[mid] === target) return mid
            if(nums[left] === target) return left
            if(nums[right] === target) return right

            if(nums[mid] < target){
                left = mid + 1
            }
            else {
                right = mid;
            }
        }
        return -1
        
    }
}
