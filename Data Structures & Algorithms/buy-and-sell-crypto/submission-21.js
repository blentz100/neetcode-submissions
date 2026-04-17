class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // go from left to right 
        // each time calculating the lowest thing we've seen to our left, and compute the profit using i
        // track the highest profit

        let lowest = prices[0];
        let profit = 0;
        let workingProfit = 0;

       for(let i = 1; i < prices.length; i++){
         lowest = Math.min(prices[i - 1], lowest)
         workingProfit = prices[i] - lowest;
         profit = Math.max(workingProfit, profit)
         console.log('lowest is: ', lowest)
         console.log('profit is: ', profit)
       }
       console.log('about to return profit: ', profit)
       return profit;


    }
}
