function isSubsequence(s: string, t: string): boolean {
    let s_pointer = 0;
    let max_pointer = s.length;
    for (let i = 0 ; i < t.length; ++i) {
        if (t[i] === s[s_pointer]) {
            ++s_pointer;
        }
        if (s_pointer === max_pointer) {
            return true;
        }
    }
    return false;
};
