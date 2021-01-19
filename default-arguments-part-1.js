/**
 * You can use undefined in any argument position to trigger the default.
 * Note that other values will not trigger the defaulting, even falsy values like
 * null, false, "", or 0.
 */

 module.exports = (lowerBound = 0, upperBound = 1) => (lowerBound + upperBound) / 2;