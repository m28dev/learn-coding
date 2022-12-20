function isTriangle(a, b, c) {
    return (Math.abs(a - b) < c && c < a + b) ? true : false;
}
