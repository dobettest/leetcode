function decompressRLElist(nums: number[]): number[] {
    var res: number[] = []
    for (var i = 0; i < nums.length; i += 2) {
        res.push(...new Array(nums[i]).fill(nums[i + 1]))
    }
    return res;
};
console.log(decompressRLElist([1, 2, 3, 4]))
