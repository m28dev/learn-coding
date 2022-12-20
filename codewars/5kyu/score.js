function score(dice) {
    const result = [0, 0, 0, 0, 0, 0, 0];
    let score = 0;

    dice.forEach((el) => result[el]++);
    result.map((count, deme) => {
        switch (deme) {
            case 1:
                if (count >= 3) {
                    score += 1000;
                    count -= 3;
                }
                score += count * 100;
                break;
            case 5:
                if (count >= 3) {
                    score += 500;
                    count -= 3;
                }
                score += count * 50;
                break;
            case 2:
            case 3:
            case 4:
            case 6:
                if (count >= 3) score += deme * 100
                break;
            default:
        }

    });

    return score
}
