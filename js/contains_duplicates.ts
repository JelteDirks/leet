function containsDuplicate(nums: number[]): boolean {
    let book = new Set();
    for (let n of nums) {
        if (book.has(n)) return true;
        book.add(n);
    }
    return false;
};
