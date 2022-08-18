function removeDuplicates(llist) {
    if (llist === null) {
        return null;
    }

    const book = new Set();
    book.add(llist.data);

    let tail = llist;
    while (tail.next !== null) {
        if (book.has(tail.next.data)) {
            tail.next = tail.next.next
            continue;
        }
        book.add(tail.next.data);
        tail = tail.next;
    }
    return llist;
}
