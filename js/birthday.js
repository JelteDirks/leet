function birthday(s, d, m) {
    // Write your code here
    // A[x][y] = tile at pos x + y tiles before

    // A[x][0] = s[x] <-- initial values
    // at position x, including - extra tiles is just the value of position x

    // A[x][y] = s[x] + A[x - 1][y - 1]
    // at position x, value at position x + y tiles before position x, this is the same as
    // y - 1 tiles before position x - 1

    // in the end, count how many times A[x][m - 1] = d for all x

    var A = new Array(s.length)
    for (let i = 0; i < A.length; i++) {
        A[i] = new Array(m).fill(NaN)
    }

    for (let i = 0; i < s.length; i++) {
        A[i][0] = s[i]
    }

    for (let i = 1; i < s.length; i++) {
        for (let j = 1; j < m; j++) {
            A[i][j] = s[i] + A[i - 1][j - 1]
        }
    }

    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (A[i][m - 1] === d) {
            count += 1
        }
    }

    return count
}

function birthday2(s, d, m) {
    if (s.length < m) return 0
    let acc = 0;
    let k = 0;
    for (let i = 0; i < m; i++) {
        acc += s[i];
    }
    if (acc === d) { k += 1 }
    for (let i = m; i < s.length; i++) {
        acc -= s[i - m]
        acc += s[i]
        if (acc === d) { k += 1 }
    }
    return k
}

birthday([1, 2, 1], 2, 2)
console.log(birthday2([1, 2, 1, 3, 2], 3, 2))
