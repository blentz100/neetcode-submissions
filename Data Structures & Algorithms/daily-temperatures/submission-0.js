class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = [];

        for(let i = 0; i < temperatures.length; i++){
            for (let j = i+1; j < temperatures.length; j++ ){
                if (temperatures[j] > temperatures[i]){
                    result.push(j - i)
                    break
                }
            }
            if (result[i] === undefined){
                    result[i] = 0
                }
            console.log('result is: ', result)
        }
        return result;
    }
}
