function Main(input) {
    input = input.split("\n");
    const n = parseInt(input[0], 10);
    const s = input[1].split(" ").map(el => parseInt(el, 10));
    const t = input[2].split(" ").map(el => parseInt(el, 10));

    // 渡されの最早を出す（直接渡された vs 隣から渡された）
    for (let i = 1; i < n; i++) {
        t[i] = Math.min(t[i], t[i - 1] + s[i - 1]);
    }

    // 1人目の渡され最早を出す（直接渡された vs 最後の人から渡された）
    t[0] = Math.min(t[0], t[n - 1] + s[n - 1]);

    // 1人目の渡されタイミングが更新されたかもしれないのでもういっかい
    for (let i = 1; i < n; i++) {
        t[i] = Math.min(t[i], t[i - 1] + s[i - 1]);
    }

    t.forEach(el => console.log(el));
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
Main(`3
4 1 1
3 10 1`);
