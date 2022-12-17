function findOutlier(integers) {
    let even = odd = 0;
    let oe = oo = 0;

    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 == 0) {
            even++;
            oe = integers[i];
        } else {
            odd++;
            oo = integers[i];
        }
        if ((odd > 1 && even == 1)) return oe;
        if ((even > 1 && odd == 1)) return oo;
    }
}
