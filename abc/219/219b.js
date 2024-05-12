function Main(input) {
    input = input.split("\n");

    const s = [];
    for (let i = 0; i < 3; i++) {
        s.push(input[i]);
    }

    const t = input[3].split("").map(el => parseInt(el, 10));

    console.log(t.map(el => s[el - 1]).join(""));
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main(`mari
to
zzo
1321`);
Main(`abra
cad
abra
123`);
Main(`a
b
c
1`);
