/*
 * @lc app=leetcode.cn id=345 lang=typescript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
function reverseVowels(s: string): string {
    let left = 0;
    let right = s.length - 1;
    let ans: string[] = s.split('');
    while (left < right) {
        console.log(left, right)
        while (/[aeiou]/i.test(ans[left]) === false) {
            left++;
        }
        while (/[aeiou]/i.test(ans[right]) === false) {
            right--;
        }
        if (left < right) {
            let temp: string = ans[left];
            ans[left] = ans[right];
            ans[right] = temp;
        }
        left++;
        right--;

    }
    return ans.join('');
};
// @lc code=end

