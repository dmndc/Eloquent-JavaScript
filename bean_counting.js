function countChar(str, char) {
    var count = 0;
    for(var i = 0; i < str.length; i++) {
        if (str.charAt(i) == char) {
            count += 1;
        }
    }
    return count;
}

function countBs(str) {
    return countChar(str, "B");
}

console.log(countBs("Bad Blue Boys"));
// → 3
console.log(countChar("Paul McCartney", "a"));
// → 2
