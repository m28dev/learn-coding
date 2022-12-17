function descendingOrder(n) {
    const nArr = n.toString().split('');
    let i = nArr.length;

    while (i > -1) {
        for (let j = 0; j < nArr.length - 1; j++) {
            const a = Number.parseInt(nArr[j], 10);
            const b = Number.parseInt(nArr[j + 1], 10);
            if (a < b) {
                nArr[j] = b;
                nArr[j + 1] = a
            }
        }
        i--;
    }

    return Number.parseInt(nArr.join(''), 10);
}