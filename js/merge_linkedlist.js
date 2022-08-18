function mergeLists(head1, head2) {
    // merges head2 into head1

    if (head2 === null) {
        return head1;
    }

    if (head1 === null) {
        return head2;
    }

    if (head1.data < head2.data) {
        head1.next = mergeLists(head1.next, head2);
        return head1;
    }

    head2.next = mergeLists(head2.next, head1);
    return head2;
}

