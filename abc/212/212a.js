function Main(input) {
    input = input.split(" ");
    if (0 < input[0] && 0 < input[1]) {
        console.log("Alloy");
    } else if (0 == input[0]) {
        console.log("Silver");
    } else if (0 == input[1]) {
        console.log("Gold");
    }
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main("100 0");