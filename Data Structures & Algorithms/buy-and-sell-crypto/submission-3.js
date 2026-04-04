class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */

    maxProfit(prices) {
        let buy = 0;
        let diff = 0;
        
        for(let sell = 1; sell < prices.length; sell++){
            if (prices[buy] >= prices[sell]){
                buy = sell;
            } else{
                let currentProfit = prices[sell] - prices[buy];
                diff = Math.max(currentProfit, diff);
            }
        }
        return diff;
    }
    
}
