impl Solution {
    pub fn check_possibility(nums: Vec<i32>) -> bool {
        let mut errs = 0;
        for i in 1..nums.len() {
            if nums[i-1] > nums[i] {
                errs += 1;
                if (errs > 1 || (i > 1 && i < nums.len() - 1 && nums[i-2] > nums[i] && nums[i+1] < nums[i-1])) {
                    return false;
                }
            }
        }
        return true;
    }
}
