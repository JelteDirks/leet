impl Solution {
    pub fn running_sum(nums: Vec<i32>) -> Vec<i32> {
        let mut result = Vec::with_capacity(nums.len());
        result.push(nums[0]);
        for i in 1..nums.len() {
            result.push(result[i-1] + nums[i]);
        }
        return result;
    }
}
