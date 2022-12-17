function isTriangle(a, b, c) {
    return (Math.abs(a - b) < c && c < a + b) ? true : false;
}

console.log(isTriangle(7, 2, 2));