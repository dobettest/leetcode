/*
 * @lc app=leetcode.cn id=2351 lang=typescript
 *
 * [2351] 第一个出现两次的字母
 */

// @lc code=start
function repeatedCharacter(s: string): string {
    const len: number = s.length;
    let right: number = len - 1;
    for (let i = 0; i < right; i++) {
        let j = i + 1;
        //如果第一个出现的位置都大于前面第二次出现的位置，则上一次的right则为第一次出现第二个字符的元素
        while (j < right) {
            if (s[i] === s[j]) {
                right = Math.min(right, j);
                break;
            }
            j++;
        }
    }
    return s[right];
};
// @lc code=end

