function Main(input) {
    if(input >= 212) return console.log("8");
    if(input >= 126) return console.log("6");
    return console.log("4");
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main("214");
Main("1");
Main("126");