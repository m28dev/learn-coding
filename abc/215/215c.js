function Main(input) {
    input = input.split(" ");
    const s = input[0];
    const k = parseInt(input[1], 10);

    /*
     * 順列を列挙する
     *
     * 例）[a,b,c] を受け取った場合
     * 
     * ```
     * [a,b,c]から'a'取り出す (i=0)
     * - current = 'a'
     * - remain = ['b', 'c']
     * 
     *     [b,c]から'b'を取り出す (i=0)
     *     - current = 'b'
     *     - remain = ['c']
     * 
     *         ['c']が戻る
     *
     *     remainPに['c']が入る
     *     取り出した'b'とremainPの'c'を結合 -> 'bc'
     * 
     *     [b,c]から'c'を取り出す (i=1)
     *     - current = 'c'
     *     - remain = ['b']
     * 
     *         ['b']が戻る
     * 
     *     remainPに['b']が入る
     *     取り出した'c'とremainPの'b'を結合 -> 'cb'
     * 
     *     ['bc', 'cb']が戻る
     * 
     * remainPに['bc', 'cb']が入る
     * 取り出した'a'とremainPの'bc', 'cb'を結合 -> 'abc', 'acb'
     * ```
     */
    const p = (arr) => {
        const ret = [];
        if (arr.length == 1) return arr;
        for (let i = 0; i < arr.length; i++) {
            const current = arr[i];
            const remain = arr.slice(0, i).concat(arr.slice(i + 1));
            const remainP = p(remain);
            for (let j = 0; j < remainP.length; j++) {
                ret.push(current + remainP[j]);
            }
        }
        return ret;
    }
    //console.log(p(s.split("")));
    console.log(Array.from(new Set(p(s.split("")))).sort()[k - 1]);
}

//Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
Main("aab 2");
//Main("abc 2");
Main("ydxwacbz 40320");