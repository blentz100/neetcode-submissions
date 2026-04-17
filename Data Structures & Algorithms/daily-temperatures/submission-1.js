class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0)

       // The key to this problem is to store pairs in the stack.
       // The pair contains the temperatures and it's corresponding index from the original input array
       // We need to keep track of that index somehow, and this is the method. 
        
        const stack = [] // pair: [temp, index]

  
        for(const [index, temp] of temperatures.entries()){
            while (stack.length !== 0 && temp > stack.at(-1)[0]){
                let [stackTemp, stackIndex] = stack.pop()
                result[stackIndex] = index - stackIndex;
            }
            stack.push([temp, index])
        }
        
        return result
    }
}
