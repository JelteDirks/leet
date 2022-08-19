class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function detectCycle(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null;
    }
    let [fast, slow] = [head, head];
    let searching = false;
    while (fast && fast.next !== null) {
        if (searching) {
            fast = fast.next;
        } else {
            fast = fast.next.next;
        }
        slow = slow.next;
        if (fast === slow) {
            if (searching) {
                return slow;
            }
            searching = true
            slow = head;
            if (slow === fast) {
                return slow; // no tail...
            }
        }
    }
    return null;
};
