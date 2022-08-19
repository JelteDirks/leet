use std::collections::HashMap;

impl Solution {
    pub fn is_isomorphic(s: String, t: String) -> bool {
        if s.len() != t.len() {
            return false;
        }
        let bs = s.as_bytes();
        let bt = t.as_bytes();
        // only valid ascii chars, .len returns bytes so this is sufficient
        // since ascii chars are all within one byte length
        let mut st = HashMap::with_capacity(s.len());
        let mut ts = HashMap::with_capacity(t.len());
        for i in 0..s.len() {
            if !st.contains_key(&bs[i]) {
                if ts.contains_key(&bt[i]) {
                    return false;
                }
                st.insert(bs[i], bt[i]);
                ts.insert(bt[i], bs[i]);
                continue;
            }
            if st.get_key_value(&bs[i]).unwrap() != (&bs[i], &bt[i]) {
                return false
            }
        }
        return true;
    }
}
