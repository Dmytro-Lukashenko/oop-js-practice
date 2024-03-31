const objProto = {
  greet: function () {
    console.log(this.greeting + " World");
  },
};

// 1. Setting the prototype
const Greeting = function (term) {
  this.greeting = term;
};

Greeting.prototype = objProto;

const obj1a = new Greeting("Hi");
const obj1b = new Greeting("Hello");

// 2. Object.create(prototype)
const obj2 = Object.create(objProto);
obj2.greeting = "Hola";

// Changing the prototype with Object.setPrototypeOf(obj, prototype)
const obj3 = new Greeting("Aloha");
Object.setPrototypeOf(obj3, objProto);
