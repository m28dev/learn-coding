function Main(input) {
    input = input.split("\n");
    const n = parseInt(input[0], 10);
    const s = input[1].split(" ").map(el => parseInt(el, 10));
    const t = input[2].split(" ").map(el => parseInt(el, 10));
    const ret = new Array(n);

    for (let i = 0; ret.includes(undefined); i++) {
        for (let j = 0; j < n; j++) {
            // 直接渡された
            if (t[j] == i) {
                ret[j] = i;
            }
            // 隣から渡された
            ret.forEach((passed, idx) => {
                if(passed + s[idx] == i) {
                    ret[idx+1] = i;
                }
            });
        }
    }

    ret.forEach(el => console.log(el));
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main(`3
4 1 5
3 10 100`);
Main(`4
100 100 100 100
1 1 1 1`);
Main(`4
1 2 3 4
1 2 4 7`);
Main(`8
84 87 78 16 94 36 87 93
50 22 63 28 91 60 64 27`);