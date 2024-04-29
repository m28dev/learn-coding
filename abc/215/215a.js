function Main(input) {
    console.log("Hello,World!" == input ? "AC" : "WA");
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main("Hello,World!");
Main("Hello,world!");
Main("Hello!World!");
