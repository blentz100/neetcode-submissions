class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
       
       // At position i, the amount of water that can be trapped is:
       // the min of (highest bar to the left, highest bar to the right) - height[i]
       // We need to compute the suffix maximum and the prefix maximum for each element first.

       const prefixMax = []
       const suffixMax = []
       let answer = 0;

       for(let i = 0; i < height.length; i++){
            prefixMax[i] = Math.max(height[i-1] ?? 0, prefixMax[i-1] ?? 0) 
       }
       for(let j = height.length - 1; j >= 0; j--){
        suffixMax[j] = Math.max(height[j+1] ?? 0, suffixMax[j+1] ?? 0 )
       }
    
       for(let i = 0; i < height.length; i++){
        answer += Math.max( ((Math.min(prefixMax[i], suffixMax[i])) - height[i]), 0 )
       }

       return answer;
        
    }
}
