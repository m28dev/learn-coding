function determinant(m) {
    if (m.length == 1) return m[0][0];

    if (m.length == 2) {
        return (m[0][0] * m[1][1]) - (m[1][0] * m[0][1]);
    }

    let ans = 0;
    for (let i = 0; i < m[0].length; i++) {
        let adj = m.slice(1).map(row => row.filter((_, index) => index != i));
        ans += ((-1) ** i) * m[0][i] * determinant(adj);
    }
    return ans;
};
