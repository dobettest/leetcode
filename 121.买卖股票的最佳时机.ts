/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    if (prices.length <= 1)
        return 0;
    let max = 0;
    let min = 0;
    for (let i = 0; i < prices.length; i++) {

        if (prices[i] < prices[min]) {
            min = i;
        }
        max = Math.max(max, prices[i] - prices[min]);
    }
    return max;
};
// @lc code=end

