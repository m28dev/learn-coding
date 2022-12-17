function divisors(integer) {
    const ret = [];
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) ret.push(i);
    }
    return ret.length === 0 ? `${integer} is prime` : ret;
};
