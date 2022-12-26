function pigIt(str) {
    return str.split(' ').map(s => {
        if (s.match(/[A-Za-z]/)) {
            return s.substring(1) + s.substring(0, 1) + 'ay';
        } else {
            return s;
        }
    }).join(' ');
}
