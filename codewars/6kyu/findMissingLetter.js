function findMissingLetter(array) {
    let mae = array[0].charCodeAt();

    for (let i = 1; i < array.length; i++) {
        let ima = array[i].charCodeAt();

        if (++mae != ima) {
            return String.fromCharCode(mae);
        }
        mae = ima;
    }
}
