/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null, q=[], result=[]): number[][] {
    return t([root], []).filter(e => e.length);
};

function t(q=[], result=[]): number[][] {
    if (q.length < 1) {
        return result;
    }
    let nextq = [];
    result.push([]);
    while (q.length) {
        let x = q.shift();
        if (x === null) {
            continue;
        }
        nextq.push(x.left);
        nextq.push(x.right);
        result[result.length - 1].push(x.val);
    }
    return t(nextq, result);
}
