const codeA = 'A'.charCodeAt(0),
    codeZ = 'Z'.charCodeAt(0),
    codea = 'a'.charCodeAt(0),
    codez = 'z'.charCodeAt(0);

function rot13(message) {
    return message.split('').map(str => {
        const code = str.charCodeAt(0);
        if (code >= codeA && code <= codeZ) {
            return String.fromCharCode((code - codeA + 13) % 26 + codeA);
        } else if (code >= codea && code <= codez) {
            return String.fromCharCode((code - codea + 13) % 26 + codea);
        } else {
            return str;
        }
    }).join('');
}
