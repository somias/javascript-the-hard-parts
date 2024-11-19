function userCreator(name, score) {
  const newPerson = Object.create(userFunctionStore);
  newPerson.name = name;
  newPerson.score = score;
  return newPerson;
}

// This assignment is lexically scoped. That is to say, when we save the function,
// when we execute it, what `this` is set to, is determined by where the function was saved.

// The `this` keyword's binding depends on how and where a function is defined and called:

// 1. For normal functions, `this` is determined by how the function is called:
//     - When using dot notation (e.g., `user1.increment()`), `this` refers to whatever is left of the dot
//     - With no dot notation, `this` defaults to the global object (window)
// 2. For arrow functions, `this` is lexically scoped:
//     - `this` is determined by where the function was defined
//     - It inherits `this` from its enclosing scope

const userFunctionStore = {
  increment: function () {
    // Since we are calling increment function on user1, "this" refers to user1 object
    // this.score++;

    // Here we declared a new function that's calling this keyword, and since it does not object
    // on the left side of dot notation, it's being evaluated to global object (window)
    // function add() {
    //   console.log("global object", this);
    //   this.score++;
    // }
    // add();

    // Because arrow functions inherits "this" from increment's scope (user1 object)
    // this will refer to score property and it will work
    const add = () => {
      console.log("user1 object { name: 'Will', score 3'}: ", this);
      this.score++;
    };

    add();
    console.log("score: ", this.score);
  },
  login: function () {
    console.log("Logged in!");
  },
};

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
