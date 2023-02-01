/*
 * @lc app=leetcode.cn id=917 lang=typescript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
function reverseOnlyLetters(s: string): string {
    let left = 0;
    let right = s.length - 1;
    let arr = s.split('')
    while (left < right) {
        while (/[^a-zA-Z]/.test(arr[left])) {
            left++;
        }
        while (/[^a-zA-Z]/.test(arr[right])) {
            right--;
        }
        //出现left>right还未结束循环的时候,交换错误
        if (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return arr.join('');
};
// @lc code=end

