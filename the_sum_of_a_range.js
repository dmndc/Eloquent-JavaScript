function range(start, end, step) {
    var step = step || 1;
    var array = [];

    if (step > 0) {
        for (var i = start; i <= end; i += step) {
            array.push(i);
        }
    } else {
        for (var i = start; i >= end; i += step) {
            array.push(i);
        }
    }
    return array;
}

function sum(array) {
    var total = 0;
    for (i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}


console.log(sum(range(1, 10)));
// -> 55

console.log(range(5, 2, -1));
// -> [5, 4, 3, 2]

console.log(range(1, 10, 2));
// -> [1, 3, 5, 7, 9]
