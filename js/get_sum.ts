function getSum(a: number, b: number): number {
    if ((a & b) !== 0) {
        return getSum(a ^ b, (a & b) << 1) 
    }
    return a ^ b;
};

function getSum2(a: number, b: number): number {
    let c;
    do {
        c = a & b;
        a = a ^ b;
        b = c << 1;
    } while (c !== 0);
    return a;
}
