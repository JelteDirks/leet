impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> i32 {
        if nums[nums.len() - 1] < target {
            return -1 as i32;
        }
        if nums[0] > target {
            return -1 as i32;
        }
        let mut l = 0;
        let mut r = nums.len() - 1;
        while r - l > 1 {
            if nums[l] == target {
                return l as i32;
            }
            let median = l + ((r-l)/2);
            if nums[median] < target {
                l = median;
            } else {
                r = median;
            }
        }
        if nums[l] == target {
            return l as i32;
        } else if nums[r] == target {
            return r as i32;
        }
        return -1;
    }
}
