function dirReduc(arr) {
    let loc = [0, 0]; //(x,y)
    const coordinate = new Map();

    arr.forEach((el, idx) => {
        // 移動先
        let nextLoc = [...loc];

        // 移動先を取得
        switch (el) {
            case 'NORTH':
                nextLoc[1]++; // (x, y+1)
                break;
            case 'SOUTH':
                nextLoc[1]--; // (x, y-1)
                break;
            case 'EAST':
                nextLoc[0]++; // (x+1, y)
                break;
            case 'WEST':
                nextLoc[0]--; // (x-1, y)
                break;
            default:
        }

        // 現在地に「受けた指示の番号」と「指示された移動先」を記録する
        coordinate.set(loc.join(','), {dirNo: idx, to: nextLoc.join(',')});

        // 今回の移動が以前に通過した経路であれば指示書から削除する
        if (coordinate.has(nextLoc.join(',')) && (coordinate.get(nextLoc.join(',')))?.to == loc.join(',')) {
            // 今回の指示を削除
            arr[idx] = null;
            coordinate.delete(loc.join(','));
            // 以前の指示を削除
            arr[(coordinate.get(nextLoc.join(','))).dirNo] = null;
        }

        // 移動する
        loc = nextLoc;
    });

    return arr.filter(el => el !== null);
}
