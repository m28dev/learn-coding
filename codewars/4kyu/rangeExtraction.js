function solution(list) {
    const ret = [];
    let box = [];
    let i = 0;

    while (i <= list.length) {
        if (box.length == 0 || (i != list.length && box.at(-1) + 1 == list[i])) {
            box.push(list[i]);
            i++;
        } else {
            if (box.length > 2) {
                ret.push(`${box[0]}-${box.at(-1)}`);
            } else {
                box.forEach(n => ret.push(n));
            }
            box = [];
        }
    }

    return ret.join(',');
}
