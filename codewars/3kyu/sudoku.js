function sudoku(puzzle) {
    let i, j;
    let su = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    while (true) {
        let predicted = false;

        for (i = 0; i < puzzle.length; i++) {
            for (j = 0; j < puzzle[i].length; j++) {
                if (puzzle[i][j] !== 0) continue;

                predicted = true;

                // yoko
                let yoko = puzzle[i].filter(v => v !== 0);
                // tate
                let tate = puzzle.filter(v => v[j] !== 0).map(a => a[j]);
                // square
                let y = i - i % 3;
                let x = j - j % 3;
                let square = puzzle.slice(y, y + 3)
                    .map(arr => arr.slice(x, x + 3))
                    .flat()
                    .filter(v => v !== 0);

                // predict
                let existence = new Set([...yoko, ...tate, ...square]);
                let candidate = su.filter(v => !existence.has(v));
                if (candidate.length === 1) {
                    puzzle[i][j] = candidate[0];
                }
            }
        }
        if (!predicted) break;
    }

    return puzzle;
}
