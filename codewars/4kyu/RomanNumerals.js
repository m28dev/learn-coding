const RomanNumerals = {
    toRoman: n => {
        let ret = '';

        let sen = parseInt(n / 1000, 10),
            hyaku = parseInt(n % 1000 / 100, 10),
            jyu = parseInt(n % 100 / 10, 10),
            ichi = parseInt(n % 10, 10);

        // 千の位
        if (sen != 0) {
            for (let i = 0; i < sen; i++) {
                ret += 'M';
            }
        }

        // 百の位
        ret += toMaker(hyaku, 'C', 'D', 'M');

        // 十の位
        ret += toMaker(jyu, 'X', 'L', 'C');

        // 一の位
        ret += toMaker(ichi, 'I', 'V', 'X');

        return ret;
    },
    fromRoman: r => {
        const arr = r.split('');
        let ret = 0;

        for (let i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case 'M':
                    ret += 1000;
                    break;
                case 'C':
                case 'D':
                    const tmp100 = fromMaker('D', 'M', 100, arr[i], arr[i + 1]);
                    if (tmp100.forward) i++;
                    ret += tmp100.ret;
                    break;
                case 'X':
                case 'L':
                    const tmp10 = fromMaker('L', 'C', 10, arr[i], arr[i + 1]);
                    if (tmp10.forward) i++;
                    ret += tmp10.ret;
                    break;
                case 'I':
                case 'V':
                    const tmp1 = fromMaker('V', 'X', 1, arr[i], arr[i + 1]);
                    if (tmp1.forward) i++;
                    ret += tmp1.ret;
                    break;
                default:
            }
        }
        return ret;
    }
};

function toMaker(n, v1, v5, v10) {
    let ret = '';

    switch (n) {
        case 4:
            ret = `${v1}${v5}`;
            break;
        case 9:
            ret = `${v1}${v10}`;
            break;
        default:
            if (n >= 5) {
                ret = v5;
                n -= 5;
            }
            for (let i = 0; i < n; i++) {
                ret += v1;
            }
    }

    return ret;
}

function fromMaker(v5, v10, order, current, next) {
    let forward = false,
        ret = 0;

    if (next == v10) {
        ret += 9 * order;
        forward = true;
    } else if (next == v5) {
        ret += 4 * order;
        forward = true;
    } else if (current == v5) {
        ret += 5 * order;
    } else {
        ret += 1 * order
    }

    return { ret, forward };
}
