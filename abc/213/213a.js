function Main(input) {
    input = input = input.split(" ").map(el => parseInt(el, 10));
    console.log(input[0] ^ input[1]);
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
//Main("3 6");
Main("10 12");
