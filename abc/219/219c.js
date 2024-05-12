function Main(input) {
    input = input.split("\n");

    const x = new Map();
    input[0].split("").forEach((el, idx) => x.set(el, idx));

    const n = parseInt(input[1], 10);

    const s = [];
    for (let i = 0; i < n; i++) {
        s.push(input[i + 2]);
    }

    s.sort((prev, curr) => {
        prev = prev.split("");
        curr = curr.split("");

        for (let i = 0; i < prev.length && i < curr.length; i++) {
            const pOrder = x.get(prev[i]);
            const cOrder = x.get(curr[i]);
            if (pOrder < cOrder) {
                return -1;
            } else if (pOrder > cOrder) {
                return 1
            }
        }

        if (prev.length < curr.length) {
            return -1;
        } else if (prev.length > curr.length) {
            return 1;
        } else {
            return 0;
        }
    });

    console.log(s.join("\n"));
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main(`bacdefghijklmnopqrstuvwxzy
4
abx
bzz
bzy
caa`);
Main(`zyxwvutsrqponmlkjihgfedcba
5
a
ab
abc
ac
b`);
