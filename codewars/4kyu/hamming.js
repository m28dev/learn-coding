/*
 * ベストプラクティスを参考に書き直し
 * ひとつ前の答えに2 or 3 or 5を乗算していけば、自然と2,3,5のべき乗の集合が出来上がるでしょ
 */
function hamming(n) {
    let i2 = 0,
        i3 = 0,
        i5 = 0;

    const ans = [1];

    do {
        let x = Math.min(2 * ans[i2], 3 * ans[i3], 5 * ans[i5]);
        ans.push(x);
        if (2 * ans[i2] <= x) i2++;
        if (3 * ans[i3] <= x) i3++;
        if (5 * ans[i5] <= x) i5++;
    } while (ans.length < n);

    return ans[n - 1];
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
