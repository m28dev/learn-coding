function permutations(string) {
    return [...new Set(func(string))];
}

function func(string) {
    if (string.length == 1) return [string];

    string = string.split('');
    let ret = [];
    for (let i = 0; i < string.length; i++) {
        let rest = string.filter((_, index) => index != i).join('');
        let kekka = func(rest);
        kekka = kekka.map(el => string[i] + el);
        ret = ret.concat(kekka);
    }

    return ret;
}
