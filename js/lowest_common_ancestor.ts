class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

// make use of bst properties
function lowestCommonAncestor(root: TreeNode|null, p: TreeNode|null, q: TreeNode|null): TreeNode|null {
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p , q);
    }
    if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p , q);
    }
    return root;
}

// for non bst
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    return see(root,p,q)[1];
};

function see(root, p, q, res = 0b00): [number, TreeNode|null] {
    if (root === null) {
        return [res, null];
    }
    let left = see(root.left, p, q, res);
    if (left[1]) {
        return [res, left[1]];
    }
    let right = see(root.right, p, q, res);
    if (right[1]) {
        return [res, right[1]];
    }
    res = left[0] | right[0];
    if (res === 3) {
        return [res, root];
    }
    if (root.val === p.val) {
        res = left[0] | 2 | res;
    }
    if (root.val === q.val) {
        res = right[0] | 1 | res;
    }
    if (res === 3) {
        return [res, root];
    }

    return [res, null];
}
