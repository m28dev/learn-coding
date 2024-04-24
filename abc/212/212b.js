function Main(input) {
    input = input.split("").map(el => parseInt(el, 10));
    let mae, ren;

    // all match
    ren = true;
    mae = input[0];
    for (let i = 1; i < input.length; i++) {
        if (mae != input[i]) {
            ren = false;
            break;
        }
        mae = input[i];
    }

    if (ren) return console.log("Weak");

    // seq
    ren = true;
    mae = input[0];
    for (let i = 1; i < input.length; i++) {
        if ((mae + 1) % 10 != input[i]) {
            ren = false;
            break;
        }
        mae = input[i];
    }

    if (ren) return console.log("Weak");


    console.log("Strong");
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main("7777");
Main("9012");
Main("0112");
