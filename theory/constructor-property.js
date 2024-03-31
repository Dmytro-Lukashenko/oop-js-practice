const objProto1 = {
  greet: function () {
    console.log(this.greeting + " Dude");
  },
};

const Greeting1 = function (term) {
  this.greeting = term;
};

// When we setting the prototype of the function constructor we also have to set the constructor property, so that the instances will use the constructor of the function consructor
Greeting1.prototype = objProto1;
Greeting1.prototype.constructor = Greeting1;

const obj4 = new Greeting1('Good morning')