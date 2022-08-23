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

function isValidBST(root: TreeNode | null): boolean {
    return min_max(root, [-Infinity, Infinity]);
};

function min_max(root: TreeNode | null, [min, max]: [number, number]): boolean {
    if (root === null) {
        return false;
    }
    if (root.val >= max || root.val <= min) {
        return false;
    }
    let v = true;
    v = min_max(root.left, [min, root.val]) && v;
    v = min_max(root.right, [root.val, max]) && v;
    return v;
}
