function wordsToMarks(string) {
    const charCodeA = 'a'.charCodeAt(0);
    const initialValue = 0;

    return string.split('').reduce((accumulator, currentValue) => {
        return accumulator + currentValue.charCodeAt(0) - charCodeA + 1;
    }, initialValue);
}
