function threeSum(arr: number[], target: number): number[][] {
    var ans: number[][] = [];
    var len = arr.length
    arr.sort((a, b) => a - b);
    if (arr.length < 3 || arr[0] > target) {
        return [];
    }
    for (var i = 0; i < len - 2; i++) {
        if (arr[i] >target)//最小的比目标值大,直接退出循环
            break;
        if(i>0&&(arr[i]^arr[i-1])==0)
            continue;
        var L = i + 1;
        var R = len - 1;
        while (L < R) {
            var sum = arr[i] + arr[L] + arr[R];
            if (sum > target) {
                R--;
            } else if (sum < target) {
                L++;
            } else if (target == sum) {
                ans.push([arr[i], arr[L], arr[R]])
                while(arr[R]==arr[--R]){
                    console.log(R)
                };
            }
        }
    }
    return ans;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4], 0))