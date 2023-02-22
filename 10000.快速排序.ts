function quickSort(nums: number[]): number[] {
    if (nums.length <= 1) {
        return nums;
    }
    const middle: number = Math.floor(nums.length / 2);
    const left: number[] = [];
    const right: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === middle) {
            continue;
        }
        if (nums[i] < nums[middle]) {
            left.push(nums[i]);
            continue;
        }
        right.push(nums[i]);
    }
    return quickSort(left).concat(nums[middle], quickSort(right));
}
const example: number[] = [2, 1, 9, 7, 8, 6, 3, 5];
console.log(quickSort(example))