/**
 * Arrow functions lexically bind the value of this. This means that the this value inside an arrow
 * function is the same as the this value outside of it.
 * 
 * Lexical scope in JavaScript means that a variable defined outside a function can be accessible inside
 * another function defined after the variable declaration. However, the variables defined inside a function
 * will not be accessible outside that function.
 */

// This example below returns undefined because the function passed to setImmediate gets its own
// this (which by default is the global object, which has no yelp property).

 /**
var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        setImmediate(function () {
            console.log(this.yelp);
        });
    }
};
foot.kick();
*/

var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        setImmediate(() => console.log(this.yelp));
    }
};
foot.kick();