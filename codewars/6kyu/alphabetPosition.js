function alphabetPosition(text) {
    const alphabets = makeAlphabetMap();
    let ret = [];

    text.split('').forEach(el => {
        const num = alphabets.get(el.toLowerCase());
        if(num !== undefined) ret.push(num);
    })
   return ret.join(' ');
}

function makeAlphabetMap() {
    const alphabets = new Map();
    alphabets.set('a', '1');
    alphabets.set('b', '2');
    alphabets.set('c', '3');
    alphabets.set('d', '4');
    alphabets.set('e', '5');
    alphabets.set('f', '6');
    alphabets.set('g', '7');
    alphabets.set('h', '8');
    alphabets.set('i', '9');
    alphabets.set('j', '10');
    alphabets.set('k', '11');
    alphabets.set('l', '12');
    alphabets.set('m', '13');
    alphabets.set('n', '14');
    alphabets.set('o', '15');
    alphabets.set('p', '16');
    alphabets.set('q', '17');
    alphabets.set('r', '18');
    alphabets.set('s', '19');
    alphabets.set('t', '20');
    alphabets.set('u', '21');
    alphabets.set('v', '22');
    alphabets.set('w', '23');
    alphabets.set('x', '24');
    alphabets.set('y', '25');
    alphabets.set('z', '26');

    return alphabets;
}
