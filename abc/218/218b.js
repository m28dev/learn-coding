function Main(input) {
    input = input.split(" ").map(el => parseInt(el, 10));
    const a = "a".charCodeAt() - 1;

    input = input.map(el => String.fromCharCode(a + el));
    console.log(input.join(""));
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26");
Main("5 11 12 16 25 17 18 1 7 10 4 23 20 3 2 24 26 19 14 9 6 22 8 13 15 21");
