// Challenge 1
// Create a function createFunction that creates and returns a function.
// When that created function is called, it should print "hello".
// When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.

function createFunction() {
  // return function () {
  //   return console.log("Hello");
  // };

  function sayHello() {
    return console.log("Hello");
  }

  return sayHello;
}

// const function1 = createFunction();
// function1();

// Challenge 2
// Create a function createFunctionPrinter that accepts one input and returns a function.
// When that created function is called, it should print out the input that was used when the function was created.
// function createFunctionPrinter(input) {
//   return function () {
//     console.log(input); // it's not necessary to use return when logging
//   };
// }

// const printSample = createFunctionPrinter("sample");
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter("hello");
// printHello(); // => should console.log('hello');

// Challenge 3
// Examine the code for the outer function.
// Notice that we are returning a function and that function is using variables that are outside of its scope.
// Uncomment those lines of code.
// Try to deduce the output before executing.
// Now we are going to create a function addByX that returns a function that will add an input by x.

function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

// const willCounter = outer();

// willCounter();
// willCounter();

function addByX(x) {
  let val = x;
  // console.log("initial value: ", x);
  function increment(y) {
    val += y;
    // console.log("increment value: ", val);
    return val;
  }

  return increment;
}

const addByTwo = addByX(2);
// addByTwo(1);
// addByTwo(1);
// addByTwo(3);

// Challenge 4
// Write a function once that accepts a callback as input and returns a function.
// When the returned function is called the first time, it should call the callback and return that output.
// If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.

function once(callback) {
  let calledFirstTime = false;
  let result;

  function returnedFunction(val) {
    if (calledFirstTime) {
      return result;
    }

    calledFirstTime = true;
    result = callback(val);
    return result;
  }

  return returnedFunction;
}

const onceFunc = once(addByTwo); // initial value is 2
onceFunc(4); // => should log 6
// onceFunc(10); // => should log 6
// onceFunc(100); // => should log 6

// Challenge 5
// Write a function "after" that takes the number of times the callback needs to be called
// before being executed as the first parameter and the callback as the second parameter.

function after(count, func) {
  let state = 0;

  function inner() {
    state += 1;

    if (state >= count) {
      func();
    }
  }

  return inner;
}

// /*** Uncomment these to check your work! ***/
// const called = function () {
//   console.log("hello");
// };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed
// afterCalled(); // => 'hello' is printed

// Challenge 6
// Write a function delay that accepts a callback as the first parameter and the wait in milliseconds
// before allowing the callback to be invoked as the second parameter. Any additional arguments after
//  wait are provided to func when it is invoked. HINT: research setTimeout();

// function delay(func, wait, ...args) {
//   setTimeout(function () {
//     // Good to know: Passing arguments invokes the function (Will Sentance)
//     // Im writing it down since my first version of this function didn't worked
//     // setTimeout(func(...args), wait)
//     func(...args);
//   }, wait);
// }

// delay(
//   function (message) {
//     console.log(message);
//   },
//   2000,
//   "Hey milos!"
// );

// Challenge 7
// Write a function rollCall that accepts an array of names and returns a function.
// The first time the returned function is invoked, it should log the first name to the console.
// The second time it is invoked, it should log the second name to the console, and so on,
// until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.

// function rollCall(names) {
//   let index = 0;
//   function inner() {
//     if (index >= names.length) {
//       console.log("Everyone accounted for.");
//     } else {
//       console.log(names[index]);
//       index += 1;
//     }
//   }

//   return inner;
// }

// const rollCaller = rollCall(["Victoria", "Juan", "Ruth"]);
// rollCaller(); // => should log 'Victoria'
// rollCaller(); // => should log 'Juan'
// rollCaller(); // => should log 'Ruth'
// rollCaller(); // => should log 'Everyone accounted for'

// Challenge 8
// Create a function saveOutput that accepts a function (that will accept one argument),
// and a string (that will act as a password). saveOutput will then return a function that
// behaves exactly like the passed-in function, except for when the password string is
// passed in as an argument. When this happens, the returned function will return an object
// with all previously passed-in arguments as keys, and the corresponding outputs as values.

// function saveOutput(func, magicWord) {
//   const password = magicWord;
//   const obj = {};

//   function inner(val) {
//     if (password === val) {
//       return obj;
//     }

//     const returnedValueFromCallback = func(val);

//     Object.assign(obj, { [val]: returnedValueFromCallback });

//     return returnedValueFromCallback;
//   }

//   return inner;
// }

// const multiplyBy2 = function (num) {
//   return num * 2;
// };
// const multBy2AndLog = saveOutput(multiplyBy2, "boo");
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(6)); // => should log 12
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog("boo")); // => should log { 2: 4, 6: 12, 9: 18 }

// Challenge 9
// Create a function cycleIterator that accepts an array, and returns a function.
// The returned function will accept zero arguments. When first invoked,
// the returned function will return the first element of the array.
// When invoked a second time, the returned function will return the second element of the array, and so forth.
//  After returning the last element of the array, the next invocation will return the first element of the array again,
//  and continue on with the second after that, and so forth.

function cycleIterator(arr) {
  let newArr = arr;
  let index = 0;

  function inner() {
    const result = newArr[index];
    if (newArr.length - 1 === index) {
      index = 0;
    } else {
      index++;
    }

    return result;
  }

  return inner;
}

const threeDayWeekend = ["Fri", "Sat", "Sun"];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'
