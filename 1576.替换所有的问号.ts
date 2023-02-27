/*
 * @lc app=leetcode.cn id=1576 lang=typescript
 *
 * [1576] 替换所有的问号
 */

// @lc code=start
function getChar(charA: string, charB: string): string {
    const side = "abcdefghijklmnopqrstuvwxyz".replace(charA, '').replace(charB, '');
    const random = Math.floor(Math.random() * 1 + (side.length - 1));
    return side.charAt(random);
}
function modifyString(s: string): string {
    if (/^[a-z]+$/.test(s)) {
        return s;
    }
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '?') {
            ans += s[i];
            continue;
        }
        const charA = i - 1 >= 0 ? ans[i - 1] : '';
        const charB = i + 1 < s.length ? s[i + 1] : '';
        console.log(charA, charB, ans)
        ans += getChar(charA, charB);
    }
    return ans;
};
// @lc code=end

