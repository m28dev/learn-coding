function solution(input, markers) {
    return input.split('\n').map(line => {
        markers.forEach(marker => line = line.split(marker)[0]);
        return line.trimEnd();
    }).join('\n');
};
