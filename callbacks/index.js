// Challenge 1
// Create a function addTwo that accepts one input and adds 2 to it.

function addTwo(input) {
    return input + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
// Create a function addS that accepts one input and adds an "s" to it.

function addS(word) {
    return word + "s"
}

// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
// Create a function called map that takes two inputs:
// an array of numbers (a list of numbers)
// a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
// Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.

function map(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }

    return newArray;
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
// Create a function called forEach that takes an array and a callback,
// and runs the callback on each element of the array. forEach does not return anything.

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
    alphabet += char;
});
// console.log(alphabet);   //prints 'abcd'

// Challenge 5
// In challenge 3, you've created a function called map. In this challenge,
// you're going to rebuild the map function by creating a function called mapWith.
// This time you're going to use forEach inside mapWith instead of using a for loop.

function mapWith(array, callback) {
    const newArray = [];
    forEach(array, function(val) {
        newArray.push(callback(val));
    })

    return newArray;
}

console.log(mapWith([1, 2, 3], addTwo));
