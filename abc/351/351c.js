function Main(input) {
    input = input.split("\n")[1].split(" ").map(el => parseInt(el, 10));
    //console.log(input);

    function f(param) {
        //console.log(retu);
        if (param.length <= 1) return param;

        const fnum = param.length - 1;
        const snum = param.length - 2;

        const first = param[fnum];
        const second = param[snum];

        if (first == second) {
            param.splice(snum, 2, first + 1);
            return f(param);
        } else {
            return param;
        }
    }

    let retu = [];
    for (let i = 0; i < input.length; i++) {
        retu.push(input[i]);

        if (i == 0) {
            continue;
        } else {
            retu = f(retu);
        }
    }

    console.log(retu.length);
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main(`7
2 1 1 3 5 3 3`);
Main(`5
0 0 0 1 2`);
