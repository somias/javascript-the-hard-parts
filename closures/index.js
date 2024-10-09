// Challenge 1
// Create a function createFunction that creates and returns a function.
// When that created function is called, it should print "hello".
// When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.

// function createFunction() {
//   //   return function () {
//   //     return console.log("Hello");
//   //   };

//   function sayHello() {
//     return console.log("Hello");
//   }

//   return sayHello;
// }

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
  console.log("initial value: ", x);
  function increment(x) {
    val += x;
    console.log("increment value: ", val);
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
  function returnedFunction(val) {
    return callback(val);
  }

  return returnedFunction;
}

const onceFunc = once(addByTwo); // initial value is 2
onceFunc(4); // => should log 6
onceFunc(10); // => should log 6
onceFunc(100); // => should log 6
