// Function Argument Patterns

// Arguments in JavaScript are dynamic. They don't actually have to exist.
// Like all variables in JavaScript, arguments are untyped.

var add = function (a, b, c) { //parameters
    return a + b + c;
}

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2, 3, 4)); // 6 => Fourth argument is ignored
console.log(add(1, 2));// 1 + 2 + undefined = NaN
console.log(add('1', '2'));// '1' + '2' + undefined = 12undefined

// JavaScript provides a arguments object which exists inside every function.
// It is an Object. It is like an array but not actually an array
// You can access all the arguments through a numerical index. Ex arguments[0]
// The arguments object also has a length property, so you can iterate through it as though it was an array, but because it's not actually an array object, you're unable to perform the actions such as sorting or filtering
// This concept is also used quite commonly in a lot of JavaScript libraries
add = function () {
    var x = 0;
    for (var i = 0; i < arguments.length; i++) {
        x = x + arguments[i];
    }
    return x;
}

console.log(add(1, 2, 3, 4)); // 10