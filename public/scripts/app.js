'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// car class
// make, model, name, vim number 
// get description method

// person
// individual attributes

var Person = function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';

    _classCallCheck(this, Person);

    this.name = name;
};

var me = new Person('Sarah Cooke');
console.log(me);

var other = new Person();
console.log(other);
