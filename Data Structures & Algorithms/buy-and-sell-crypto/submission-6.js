class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(prices.length < 2) return 0
        let left = 0;
    let right = 1;
    let profit = prices[right] - prices[left];
    
    while (left < prices.length - 1){
        let workingProfit = prices[right] - prices[left]
        console.log('left: ', left, 'right: ', right, 'workingProfit: ', workingProfit, 'profit: ', profit)
        //check for negative profit
        if(prices[left] > prices [right]){
            left++
            right++
        }
        else if (right < prices.length - 1){
            right++
        }
        else{
            left++
        }
        
        if(workingProfit > profit){
            profit = workingProfit;
        }
    }
    if(profit < 0) return 0
    return profit
    }
}
