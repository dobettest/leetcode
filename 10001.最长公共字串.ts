/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * longest common substring
 * @param str1 string字符串 the string
 * @param str2 string字符串 the string
 * @return string字符串
 * @input "1AB2345CD","12345EF"
 * @answer "2345"
 */
export function LCS(str1: string, str2: string): string {
    // write code here
    const dp = Array(str1.length).fill("").map(() => Array(str2.length).fill(""));
    let ans = "";
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                if (i === 0 || j === 0) {
                    dp[i][j] = str2[j];
                } else {
                    dp[i][j] = dp[i - 1][j - 1] + str2[j];
                }
                if (dp[i][j].length > ans.length) {
                    ans = dp[i][j];
                }
            }
        }
    }
    return ans;
}
