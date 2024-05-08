function Main(input) {
    input = input.split("\n");
    const m = parseInt(input[0], 10);
    const p = input[1].split(" ").map(el => parseInt(el, 10));
    const q = new Array(m);

    p.forEach((el, idx) => {
        q[el] = idx + 1;
    });

    console.log(q.slice(1).join(" "));
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main(`3
2 3 1`);
Main(`5
5 3 2 4 1`);
