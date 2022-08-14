function getConcatenation(nums: number[]): number[] {
    let n = nums.length;
    let ans = new Array(n * 2);
    for (let i = 0 ; i < ans.length; ++i) {
        ans[i] = nums[i % n];
    }
    return ans;
};
