function reverseBits(num: number): number {
    var n: number = num >>> 0;
    var curr: number = 0;
    var pre: number = 0;
    var ans: number = 0;
    while (n) {
        if (n & 1)
            curr++;
        else {
            ans = Math.max(pre + curr + 1, ans);
            pre = curr;
            curr = 0;
        }
        n >>>= 1;
    }
    return Math.min(32, Math.max(pre+curr+1,ans));
};
console.log(reverseBits(35))