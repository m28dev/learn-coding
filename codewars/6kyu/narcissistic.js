function narcissistic(value) {
    let sum = 0;
    const arr = value.toString().split('');

    arr.forEach(el => {
        sum += el ** arr.length;
    });

    return sum == value;
}
