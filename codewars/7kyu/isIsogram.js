function isIsogram(str) {
    const strArray = str.toLowerCase().split('');
    let flg = true;

    for (let i = 0; i < strArray.length; i++) {
        for (let j = i + 1; j < strArray.length; j++) {
            if (strArray[i] == strArray[j]) flg = false;
        }
    }

    return flg;
}
