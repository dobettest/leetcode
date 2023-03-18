/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * @param S string字符串
 * @param T string字符串
 * @return string字符串
 */
function add(target: object, key: string) {
    if (target[key]) {
        target[key] = ++target[key];
    } else {
        target[key] = 1;
    }
}
function remove(target: object, key: string) {
    if (target[key] > 0) {
        target[key] = --target[key];
    }
}
function isOk(required: object, current: object): boolean {
    for (let item in required) {
        if (!current[item] || current[item] < required[item]) {
            return false;
        }
    }
    return true;
}
function minWindow(S: string, T: string): string {
    // write code here
    let ans: string = "";
    let left = 0,
        right = 0;
    const current = new Object();
    const required = new Object();
    for (let i = 0; i < T.length; i++) {
        add(required, T[i]);
    }
    while (right < S.length) {
        add(current, S[right++]);
        while (isOk(required, current)) {
            if (ans === "" || right - left < ans.length) {
                ans = S.slice(left, right);
            }
            remove(current, S[left++]);
        }
    }
    return ans;
}
// @lc code=end

