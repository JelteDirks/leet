function hasCycle(head) {
    const book = new Set();
    let ptr = head;
    while (ptr !== null) {
        if (book.has(ptr)) {
            return 1;
        }
        book.add(ptr);
        ptr = ptr.next;
    }
    return 0;
}
