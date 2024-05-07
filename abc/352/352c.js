function Main(input) {
    input = input.split("\n");
    input.shift();

    // いったん全員載せる
    let temp = 0;
    input.forEach(el => {
        temp += parseInt(el.split(" ")[0], 10);
    });

    // ひとりずつ抜いて一番上に載せて高さを見ていく
    let ans = 0;
    input.forEach(el => {
        const ab = el.split(" ");
        const t = temp - parseInt(ab[0], 10) + parseInt(ab[1], 10);
        ans = Math.max(ans, t);
    });

    console.log(ans);
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main(`3
4 10
5 8
2 9`);
Main(`5
1 1
1 1
1 1
1 1
1 1`);
Main(`10
690830957 868532399
741145463 930111470
612846445 948344128
540375785 925723427
723092548 925021315
928915367 973970164
563314352 832796216
562681294 868338948
923012648 954764623
691107436 891127278`);
