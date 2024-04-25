function Main(input) {
    input = input.split("\n");

    const len = input[0];
    const original = input[1].split(" ").map(el => parseInt(el, 10));

    //const sortedSc = original.toSorted((a, b) => a - b);
    const sortedSc = [...original].sort((a, b) => a - b);
    const booby = sortedSc[len - 2];

    for (let i = 0; i < len; i++) {
        if (original[i] == booby) {
            console.log(i + 1);
            return;
        }
    }
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main(
`6
1 123 12345 12 1234 123456`
);
Main(
`5
3 1 4 15 9`
)
