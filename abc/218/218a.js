function Main(input) {
    input = input.split("\n");
    const n = parseInt(input[0], 10);
    const s = input[1].split("");

    const ans = s[n - 1] == "o" ? "Yes" : "No";
    console.log(ans);
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main(`4
oooxoox`);
Main(`7
ooooooo`);
