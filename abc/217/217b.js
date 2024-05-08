function Main(input) {
    input = input.split("\n");

    const m = new Map([
        ["ABC", 0],
        ["ARC", 0],
        ["AGC", 0],
        ["AHC", 0]
    ]);

    input.forEach(el => {
        m.set(el, m.get(el) + 1);    
    });

    m.forEach((v, k) => {
        if(v == 0) return console.log(k);
    });

}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main(`ARC
AGC
AHC`);
Main(`AGC
ABC
ARC`);
