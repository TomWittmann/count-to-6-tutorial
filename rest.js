/**
 * Rest parameters are used when you want to write a function that accepts a variadic number of arguments
 * but acts on them as if they were an array.
 */

module.exports = function average(...myArguments) {
    let averageNum = myArguments.reduce((acc, val, key, col) => {
        if (key === myArguments.length - 1) {
            return (acc + val) / myArguments.length;
        } else {
            return acc + val;
        }
    }, 0);
    return averageNum;
};