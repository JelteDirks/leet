function kthDistinct(arr: string[], k: number): string {
    let m = new Map();

    for (let i = 0 ; i < arr.length; ++i) {
        if (!m.has(arr[i])) { 
            m.set(arr[i], 1);
            continue;
        }

        m.set(arr[i], m.get(arr[i]) + 1);
    }

    for (let [key, value] of m.entries()) {
        if (k === 1 && value === 1) return key;
        if (value === 1) {
            --k;
        }
    }

    return "";
};
