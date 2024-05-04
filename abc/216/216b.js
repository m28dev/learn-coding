function Main(input) {
    input = input.split("\n");
    input.shift();

    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] == input[j]) {
                return console.log('Yes');
            }
        }
    }

    console.log("No");
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main(`3
tanaka taro
sato hanako
tanaka taro`);
Main(`3
saito ichiro
saito jiro
saito saburo`);
Main(`4
sypdgidop bkseq
bajsqz hh
ozjekw mcybmtt
qfeysvw dbo`);
