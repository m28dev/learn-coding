function sudoku(puzzle) {
    let i, j;
    let su = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (i = 0; i < puzzle.length; i++) {
        for (j = 0; j < puzzle[i].length; j++) {
            if (puzzle[i][j] !== 0) continue;
            // yoko
            let yoko = puzzle[i].filter(v => v !== 0);
            // tate
            let tate = puzzle.filter(v => v[j] !== 0).map(a => a[j]);
            // square
            // TODO
            let x = i % 3;
            let y = j % 3;

            console.log(yoko);
            console.log(tate);

            let existence = new Set([...yoko, ...tate]);
            console.log(existence);

            let candidate = su.filter(v => !existence.has(v));
            console.log(candidate);

            if (candidate.length === 1) {
                puzzle[i][j] = candidate[0];
            }
            break; //TODO
        }
        break; //TODO
    }

    return puzzle;
}

// 

sudoku([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]]
);

