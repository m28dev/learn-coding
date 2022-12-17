var isSquare = function (n) {
    if (n < 0) return false;
    if (n == 0 || n == 1) return true;

    for (let i = 2; i <= Number.parseInt(n / 2, 10); i++) {
        if (n % i === 0 && i ** 2 === n) return true;
    }

    return false;
}