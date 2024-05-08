function Main(input) {
    input = input.split(" ");
    const s = input[0];
    const t = input[1];

    if (s < t) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main("abc atcoder");
Main("arc agc");
Main("a aa");
