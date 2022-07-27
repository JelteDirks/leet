function rotateLeft(d, arr) {
    // Write your code here
    const n = arr.length;
    if (n === d) {
        return arr;
    }

    let result = new Array(n);

    for (let i = 0; i < n; ++i) {
        let m = (n + (i - d)) % n; // new position
        result[m] = arr[i];
    }

    return result;
}

const a = [1,2,3,4,5];
console.log(rotateLeft(1, a));
