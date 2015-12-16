var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(prev, cur) {
    return prev.concat(cur);
}, []));


// → [1, 2, 3, 4, 5, 6]
