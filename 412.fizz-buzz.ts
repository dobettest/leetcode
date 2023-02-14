/*
 * @lc app=leetcode.cn id=412 lang=typescript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
function fizzBuzz(n: number): string[] {
    const ans: string[] = [];
    const condition1 = (i: number): boolean => i % 3 === 0;
    const condition2 = (i: number): boolean => i % 5 === 0;
    for (let i = 1; i <= n; i++) {
        switch (true) {
            case condition1(i) && condition2(i):
                ans.push("FizzBuzz")
                break;
            case condition1(i):
                ans.push("Fizz");
                break;
            case condition2(i):
                ans.push("Buzz");
                break;
            default:
                ans.push(`${i}`)
                break;
        }
    }
    return ans;
};
// @lc code=end

