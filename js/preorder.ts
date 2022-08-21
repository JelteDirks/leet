function preorder(root: Node | null, result = []): number[] {
    if (root === null) {
        return [];
    }

    result.push(root.val);

    for (let c of root.children) {
        preorder(c, result);
    }

    return result;
};

function preorder(root: Node | null): number[] {
    let stack = [root];
    let result = [];

    while (stack.length) {
        let x = stack.pop();
        if (x === null) {
            continue;
        }
        result.push(x.val);
        for (let y of x.children.reverse()) {
            stack.push(y);
        }
    }

    return result;
};
