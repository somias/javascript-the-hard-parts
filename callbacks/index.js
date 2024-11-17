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
  return word + "s";
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

let alphabet = "";
const letters = ["a", "b", "c", "d"];
forEach(letters, function (char) {
  alphabet += char;
});
// console.log(alphabet);   //prints 'abcd'

// Challenge 5
// In challenge 3, you've created a function called map. In this challenge,
// you're going to rebuild the map function by creating a function called mapWith.
// This time you're going to use forEach inside mapWith instead of using a for loop.

function mapWith(array, callback) {
  const newArray = [];
  forEach(array, function (val) {
    newArray.push(callback(val));
  });

  return newArray;
}

// console.log(mapWith([1, 2, 3], addTwo));

// Challenge 6
// Create a function called reduce that takes an array and reduces the elements to a single value.
// For example, it can sum all the numbers, multiply them, or any operation that you can put into a function.

function reduce(array, callback, startingValue) {
  let initialValue = startingValue;
  for (let i = 0; i < array.length; i++) {
    initialValue = callback(initialValue, array[i]);
  }

  return initialValue;
}

const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
// console.log(reduce(nums, add, 0));   //-> 8

// Challenge 7
// Construct a function intersection that takes in an array of arrays,
// compares the inner arrays, and returns a new array with elements found in all of them. BONUS: Use reduce!

function intersection(arrays) {
  return arrays.reduce((acc, curr) => {
    return curr.filter((el) => acc.includes(el));
  });
}

// console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]

// Challenge 8
// Construct a function union that takes in an array of arrays,
// compares the inner arrays, and returns a new array that contains all elements.
// If there are duplicate elements, only add it once to the new array.
// Preserve the order of the elements starting from the first element of the first array. BONUS: Use reduce!

function union(arrays) {
  return arrays.reduce((acc, curr) => {
    const elements = curr.filter((el) => !acc.includes(el));
    return acc.concat(elements);
  });
}

// console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
// Construct a function objOfMatches that accepts two arrays and a callback.
// objOfMatches will build an object and return it. To build the object,
// objOfMatches will test each element of the first array using the callback
// to see if the output matches the corresponding element (by index) of the second array.
// If there is a match, the element from the first array becomes a key in an object,
// and the element from the second array becomes the corresponding value.

function objOfMatches(firstArray, secondArray, callback) {
  const newObject = {};

  for (let index = 0; index < firstArray.length; index++) {
    const transformedElement = callback(firstArray[index]);

    if (transformedElement === secondArray[index]) {
      newObject[firstArray[index]] = secondArray[index];
    }
  }

  return newObject;
}

// console.log(
//   objOfMatches(
//     ["hi", "howdy", "bye", "later", "hello"],
//     ["HI", "Howdy", "BYE", "LATER", "hello"],
//     function (str) {
//       return str.toUpperCase();
//     }
//   )
// );
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
// Construct a function multiMap that will accept two arrays:
// an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values.
// The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks,
// where the input to each callback is the key.

// This is my solution, I'll pase second solution below this one
// function multiMap(valuesArray, callbacksArray) {
//   const newObj = {};

//   for (let i = 0; i < valuesArray.length; i++) {
//     const element = valuesArray[i];
//     const values = [];

//     for (let j = 0; j < callbacksArray.length; j++) {
//       const cb = callbacksArray[j];
//       values.push(cb(element));
//     }

//     newObj[element] = values;
//   }

//   return newObj;
// }

function multiMap(valuesArray, callbacksArray) {
  const newObj = {};
  valuesArray.forEach((element) => {
    newObj[element] = callbacksArray.map((cb) => cb(element));
  });

  return newObj;
}

// console.log(
//   multiMap(
//     ["catfood", "glue", "beer"],
//     [
//       function (str) {
//         return str.toUpperCase();
//       },
//       function (str) {
//         return str[0].toUpperCase() + str.slice(1).toLowerCase();
//       },
//       function (str) {
//         return str + str;
//       },
//     ]
//   )
// );
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
// Construct a function objectFilter that accepts an object as the first parameter
//  and a callback function as the second parameter. objectFilter will return a new object.
//  The new object will contain only the properties from the input object such
//  that the property's value is equal to the property's key passed into the callback.

function objectFilter(obj, callback) {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    const transformedKey = callback(key);
    if (obj[key] === transformedKey) {
      newObj[key] = transformedKey;
    }
  });
  return newObj;
}

const cities = {
  London: "LONDON",
  LA: "Los Angeles",
  Paris: "PARIS",
};
// console.log(objectFilter(cities, (city) => city.toUpperCase())); // Should log { London: 'LONDON', Paris: 'PARIS'}
