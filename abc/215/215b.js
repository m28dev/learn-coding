function Main(input) {
    //input = parseInt(input, 10);
    input = BigInt(input);

    for (let i = 0; ; i++) {
        const a = BigInt(2 ** i);
        if (a > input) return console.log(i - 1);
        if (a == input) return console.log(i);
    }
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main("6");
Main("1");
Main("1000000000000000000");
Main("15");
