function Main(input) {
    input = input.split("\n");
    const s = input[0];
    const t = input[1];

    let cur = 0;
    let ans = [];

    for (let i = 0; i < s.length; i++) {
        while (cur < t.length) {
            if (s[i] == t[cur]) {
                ans.push(++cur);
                break;
            }
            cur++;
        }
    }

    console.log(ans.join(' '));
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main(`abc
axbxyc`);
Main(`aaaa
bbbbaaaa`);
Main(`atcoder
atcoder`);
