function hamming(n) {
    const MAX = 1000000000;

    // 定数MAXに対する、2,3,5の最大指数を求める
    const xx2 = Math.log2(MAX);
    const xx3 = xx2 / Math.log2(3);
    const xx5 = xx2 / Math.log2(5);

    const ans = [];
    let i, j, k;

    // べき乗の組み合わせ一覧をつくる
    for (i = 0; i < xx2 + 1; i++) {
        for (j = 0; j < xx3 + 1; j++) {
            for (k = 0; k < xx5 + 1; k++) {
                ans.push((2 ** i) * (3 ** j) * (5 ** k));
            }
        }
    }

    // 指定された順位の値を返す
    return ans.sort((a, b) => a - b)[n - 1];
}

/*
function hamming(n) {
    if (n == 1) return 1;

    const ans = [0, 1];

    for (let i = 2; !ans[n]; i++) {
        let j = i;
        while (true) {
            if (j % 2 == 0) {
                j = j / 2;
                continue;
            }
            if (j % 3 == 0) {
                j = j / 3;
                continue;
            }
            if (j % 5 == 0) {
                j = j / 5;
                continue;
            }
            break;
        }
        if (j == 1) ans.push(i);
    }

    return ans[n];
}
*/
