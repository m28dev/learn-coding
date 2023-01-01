function sumIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let ret = 0;

    let tmp = intervals[0];
    intervals.forEach(element => {
        if (element[0] >= tmp[0] && element[0] <= tmp[1]) {
            tmp = [tmp[0], tmp[1] > element[1] ? tmp[1] : element[1]];
        } else {
            ret += tmp[1] - tmp[0]
            tmp = element;
        }
    });
    ret += tmp[1] - tmp[0];

    return ret;
}
