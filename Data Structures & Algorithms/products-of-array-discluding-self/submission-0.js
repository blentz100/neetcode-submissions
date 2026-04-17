class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
    // use a single array to do all the calculations
    const output = new Array(nums.length).fill(1)

    let prefix = 1
    let postfix = 1;



    for(let i = 0; i < nums.length; i++){
      output[i] = prefix
      prefix = nums[i] * prefix
    }

    for(let j = nums.length -1; j >=0; j--){
      output[j] = output[j] * postfix
      postfix = nums[j] * postfix
    }
    return output;
    }
}
