const possibility = {
    '1': ['1', '2', '4'],
    '2': ['2', '1', '3', '5'],
    '3': ['3', '2', '6'],
    '4': ['4', '1', '5', '7'],
    '5': ['5', '2', '4', '6', '8'],
    '6': ['6', '3', '5', '9'],
    '7': ['7', '4', '8'],
    '8': ['8', '5', '7', '9', '0'],
    '9': ['9', '6', '8'],
    '0': ['0', '8']
};

function getPINs(observed) {
    let ret = [],
        tmp = [];

    observed.split('').forEach(d => {
        possibility[d].forEach(p => {
            if (ret.length == 0) {
                tmp.push(p);
            }
            ret.forEach(r => {
                tmp.push(`${r}${p}`);
            });
        });
        ret = [...tmp];
        tmp = [];
    });

    return ret;
}
