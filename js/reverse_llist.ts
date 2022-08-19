class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function reverseList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return head;
    }

    let new_head = reverseList(head.next) as ListNode;
    head.next.next = head;
    head.next = null;
    return new_head;
};

function reverseListIt(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null;
    }

    let cur = head;
    let prev = null;
    while (cur !== null) {
        let tmp = cur.next;
        cur.next = prev;

        prev = cur;
        cur = tmp;
    }
    return prev;
}
