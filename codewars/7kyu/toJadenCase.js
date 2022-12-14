String.prototype.toJadenCase = function () {
    const words = this.split(' ');

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word[0].toUpperCase() + word.slice(1);
    }

    return words.join(' ');
};
