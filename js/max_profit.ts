function maxProfit(prices: number[]): number {
    let min = prices[0];
    let profit = 0;
    for (let i = 1 ; i < prices.length; ++i) {
        let val = prices[i];
        min = Math.min(min, val);
        profit = Math.max(profit, val - min);
    }
    return profit;
};

function maxProfitNaive(prices: number[]): number {
    let max = 0;
    for (let i = 0 ; i < prices.length; ++i) {
        for (let j = i + 1; j < prices.length; ++j) {
            let profit = prices[j] - prices[i];
            max = Math.max(max, profit);
        }
    }
    return max;
};
