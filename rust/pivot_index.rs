impl Solution {
    pub fn pivot_index(nums: Vec<i32>) -> i32 {
        let mut total = 0;
        for i in 0..nums.len() {
            total = total + nums[i];
        }
        let mut left_sum = 0;
        for i in 0..nums.len() {
            let right_sum = total - left_sum - nums[i];
            if left_sum == right_sum {
                return i as i32;
            }
            left_sum = left_sum + nums[i];
        }
        return -1 as i32;
    }
}
