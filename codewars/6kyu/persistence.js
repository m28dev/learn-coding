function persistence(num) {
    let count = 0;
    let arr = num.toString();
    while (arr.length > 1) {
        count++;
        arr = arr.split('').reduce((prev, curr) => parseInt(prev, 10) * parseInt(curr, 10)).toString();
    }
    return count;
}
