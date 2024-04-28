function Main(input) {
    input = input.split(" ").map(el => parseInt(el, 10));

    let ret = 0;
    let a = 0, b = 0, c = 0;

    do {
        do {
            do {
                //console.log(`${a},${b},${c}`);
                ret++;
                c++;
            } while (a + b + c <= input[0] && a * b * c <= input[1])
            b++;
            c = 0;
        } while (a + b + c <= input[0] && a * b * c <= input[1])
        a++;
        b = 0;
    } while (a + b + c <= input[0] && a * b * c <= input[1])

    console.log(ret);
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main("2 10");
Main("10 10");
Main("30 100");
Main("0 100");
Main("0 0");
