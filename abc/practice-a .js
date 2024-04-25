function Main(input) {
    input = input.split(" ").map(el => parseInt(el, 10));
    console.log(input);
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main("100 0");
