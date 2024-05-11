function Main(input) {
    input = input.split("\n");

    const n = parseInt(input[0].split(" ")[0], 10);
    const k = parseInt(input[0].split(" ")[1], 10);
    const a = input[1].split(" ").map(el => parseInt(el, 10));

    let start = 0;

    let i = 0;
    while (i < n) {
        let zan = k;
        while (i < n) {
            if (a[i] <= zan) {
                zan -= a[i];
                i++;
            } else {
                break;
            }
        }
        start++;
    }

    console.log(start);
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main(`7 6
2 5 1 4 1 2 3`);
Main(`7 10
1 10 1 10 1 10 1`);
Main(`15 100
73 8 55 26 97 48 37 47 35 55 5 17 62 2 60`);
