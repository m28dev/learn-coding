function add(a, b) {
    //return (BigInt(a) + BigInt(b)).toString();

    const aArr = []
        , bArr = [];

    while (true) {
        if (a.length != 0) {
            aArr.push(a.slice(-15));
            a = a.substring(0, a.length - 15);
        }
        if (b.length != 0) {
            bArr.push(b.slice(-15));
            b = b.substring(0, b.length - 15);
        }
        if (a.length == 0 && b.length == 0) break;
    }

    const ret = [];
    let flg = false;

    while (aArr.length != 0 || bArr.length != 0) {
        let na = typeof aArr[aArr.length - 1] != 'undefined' ? aArr.shift() : 0;
        let nb = typeof bArr[bArr.length - 1] != 'undefined' ? bArr.shift() : 0;
        let sum = Number(na) + Number(nb);

        if (flg) {
            sum += 1;
            flg = false;
        }

        let sumStr = sum.toString();
        if (sumStr.length > 15) {
            flg = true;
            sumStr = sumStr.substring(1);
        }

        ret.push(sumStr.padStart(15, 0));
    }
    if (flg) ret.push('1');

    return (ret.reverse()).join('').replace(/^0*/, '');
}
