/*
 * @lc app=leetcode.cn id=868 lang=typescript
 *
 * [868] 二进制间距
 */

// @lc code=start
function binaryGap(n: number): number {
    let s: string = n.toString(2);
    let max: number = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            continue;
        }
        let j = i + 1;
        while (j < s.length) {
            if (s[j] === '1') {
                max = Math.max(max, j - i);
                break;
            }
            j++;
        }

    }
    return max;
};
// @lc code=end

