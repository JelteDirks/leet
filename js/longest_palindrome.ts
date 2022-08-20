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

function longestPalindromeWithChars(s: string): number {    
    let book = new Map();

    for (let i = 0; i < s.length; ++i) {
        let c = s[i];
        if (!book.has(c)) {
            book.set(c, 1);
            continue;
        }
        book.set(c, book.get(c) + 1);
    }
    
    if (book.size === 1) { return book.entries().next().value[1]}
    let max = 0;
    for (let [c, k] of book.entries()) {
        if ((k%2) === 0) {
            max += k;
            book.delete(c);
            continue;
        }

        let l = k - 1;
        max += l;
        book.set(c, 1);
    }
    return book.size >= 1 ? max + 1 : max;
};
