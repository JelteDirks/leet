function isAnagram(s: string, t: string): boolean {
    const book = new Map();
    for (let c of s) {
        let old = book.get(c);
        if (!old) {
            old = 0;
        }
        book.set(c, old + 1);
    }
    
    for (let c of t) {
        let old = book.get(c);
        if (!old) {
            return false;
        }
        book.set(c, old - 1);
    }
    for (let [ ,v] of book.entries()) {
        if (v > 0) {
            return false;
        }
    }
    return true;
};
