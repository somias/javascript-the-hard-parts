// Challenge 1
// Create a function that has two parameters (name and age) and returns an object. Let's call this function makePerson. This function will:
// Create an empty object
// Add a name property to the newly created object with its value being the 'name' argument passed into the function
// Add an age property to the newly created object with its value being the 'age' argument passed into the function
// Return the object

function makePerson(name, age) {
  const newObject = {};
  newObject.name = name;
  newObject.age = age;

  return newObject;
}

// Challenge 2
// Inside personStore object, create a property greet where the value is a function that logs "hello".

const personStore = {
  greet: function () {
    console.log("hello");
  },
};

// Challenge 3
// Create a function personFromPersonStore that takes as input a name and an age.
// When called, the function will create person objects using the Object.create method on the personStore object.
function personFromPersonStore(name, age) {
  const newPerson = Object.create(personStore);
  newPerson.name = name;
  newPerson.age = age;

  return newPerson;
}

const sandra = personFromPersonStore("Sandra", 26);

// console.log(sandra.name);
// console.log(sandra.age);
// sandra.greet();

// Challenge 4
// Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]".

personStore.introduce = function () {
  console.log(`Hi, my name is ${this.name}`);
};

sandra.introduce();
