class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function middleNode(head: ListNode | null): ListNode | null {
    let [double_step, single_step] = [head, head];
    while (double_step && double_step.next) {
        double_step = double_step.next.next;
        single_step = single_step.next;
    }
    return single_step;
};

