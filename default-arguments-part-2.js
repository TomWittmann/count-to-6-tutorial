/**
 * An identity function is a function that always returns the same value that was used as its argument.
 * x => x;
 */

function numExclamation(word) {
    return word.length;
}

 module.exports = (word, numExcls = word.length) => `${word}${'!'.repeat(numExcls)}`;