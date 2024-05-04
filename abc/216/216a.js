function Main(input) {
    input = input.split(".").map(el => parseInt(el, 10));
    const x = input[0], y = input[1];

    if (0 <= y && y <= 2) {
        console.log(`${x}-`);
    } else if (3 <= y && y <= 6) {
        console.log(`${x}`);
    } else if (7 <= y && y <= 9) {
        console.log(`${x}+`);
    }
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main("15.8");
Main("1.0");
Main("12.5");
