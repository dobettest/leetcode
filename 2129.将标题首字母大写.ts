/*
 * @lc app=leetcode.cn id=2129 lang=typescript
 *
 * [2129] 将标题首字母大写
 */

// @lc code=start
function capitalizeTitle(title: string): string {
    return title.replace(/([a-zA-Z]+)(?=\s)?/g, function replacer(raw: string, $1: string) {
        if ($1.length <= 2) {
            return $1.toLowerCase()
        }
        return $1.toUpperCase()[0] + $1.slice(1).toLowerCase();
    })
};
// @lc code=end

