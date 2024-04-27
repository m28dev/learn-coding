function Main(input) {
    input = input.split("\n");

    const size = input.shift();

    const ay = input.slice(0, size);
    const by = input.slice(size);

    let y = 0;
    for (let i = 0; i < ay.length; i++) {
        if (ay[i] != by[i]) {
            y = i;
            break;
        }
    }

    const ax = ay[y].split("");
    const bx = by[y].split("");

    let x = 0;
    for (let i = 0; i < ax.length; i++) {
        if (ax[i] != bx[i]) {
            x = i;
            break;
        }
    }

    console.log(`${y + 1} ${x + 1}`);
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main(`3
abc
def
ghi
abc
bef
ghi`);
Main(`1
f
q`);
Main(`10
eixfumagit
vtophbepfe
pxbfgsqcug
ugpugtsxzq
bvfhxyehfk
uqyfwtmglr
jaitenfqiq
acwvufpfvv
jhaddglpva
aacxsyqvoj
eixfumagit
vtophbepfe
pxbfgsqcug
ugpugtsxzq
bvfhxyehok
uqyfwtmglr
jaitenfqiq
acwvufpfvv
jhaddglpva
aacxsyqvoj`);