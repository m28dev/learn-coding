function Main(input) {
    input = input.split(" ").map(el => parseInt(el, 10));
    const x = input[1], y = input[2];
    const z = input[3];

    if (x < z && z < y) return console.log("Yes");
    if (y < z && z < x) return console.log("Yes");
    console.log("No");
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main("7 6 1 3");
Main("10 3 2 9");
Main("100 23 67 45");
