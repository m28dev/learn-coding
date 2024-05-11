function Main(input) {
    input = input.split("\n");
    input = input[1].split(" ").map(el => parseInt(el, 10));

    const first = input[0];
    for (let i = 1; i < input.length; i++) {
        if (first < input[i]) return console.log(i + 1);
    }

    console.log(-1)
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main(`4
3 2 5 2`);
Main(`3
4 3 2`);
Main(`7
10 5 10 2 10 13 15`);