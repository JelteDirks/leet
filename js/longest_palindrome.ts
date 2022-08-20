function longestPalindromeCountOnly(s: string): number {
    let book = new Set();
    let max = 0;
    for (let i = 0 ; i < s.length; ++i) {
        let c = s[i];
        if(book.has(c)) {
            max += 2;
            book.delete(c);
        } else {
            book.add(c);
        }
    }
    return book.size >= 1 ? max + 1 : max;
};

function longestPalindrome(s: string): string {
    let book = new Set();
    let a = [];
    for (let i = 0 ; i < s.length; ++i) {
        let c = s[i];
        if(book.has(c)) {
            a.push(c);
            book.delete(c);
        } else {
            book.add(c);
        }
    }
    let n = a.length;
    let size = 2 * n;
    if (book.size >= 1) {
        size++;
        a.push(book.entries().next().value[0]);
    }

    for (let i = 0; i < n; ++i) {
        a[size - i - 1] = a[i];
    }

    return a.join("");
}
