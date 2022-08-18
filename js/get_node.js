function getNode(llist, positionFromTail) {
    const buf_size = positionFromTail + 1;
    const ring_buf = new Array(buf_size);
    let buf_idx = 0;
    while (llist !== null) {
        ring_buf[buf_idx] = llist.data;
        buf_idx = (buf_idx + 1) % buf_size;
        llist = llist.next;
    }
    return ring_buf[buf_idx];
}
