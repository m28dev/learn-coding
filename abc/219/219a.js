function Main(input) {
    const x = parseInt(input, 10);

    if (0 <= x && x < 40) {
        return console.log(40 - x);
    } else if (x < 70) {
        return console.log(70 - x);
    } else if (x < 90) {
        return console.log(90 - x);
    } else {
        return console.log("expert");
    }
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main("56");
Main("0");
Main("39")
Main("40");
Main("69");
Main("70");
Main("89");
Main("90");
Main("100");
