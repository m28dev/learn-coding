function Main(input) {
    input = input.split("\n");

    const a = input[0].split(" ").map(el => parseInt(el, 10));
    const b = input[1].split(" ").map(el => parseInt(el, 10));

    scoreA = a.reduce((accumulator, currentValue) => accumulator + currentValue);
    scoreB = b.reduce((accumulator, currentValue) => accumulator + currentValue);

    console.log((scoreA - scoreB) + 1);

}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main(
`0 1 0 1 2 2 0 0 1
1 1 0 0 0 0 1 0`
);
Main(
`0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0`
);
