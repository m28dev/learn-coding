function validParentheses(parens) {
    const arr = parens.split('');
    let cnt = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '(') cnt++;
        if (arr[i] == ')') cnt--;
        if (cnt < 0) break;
    }

    return cnt == 0;
}
