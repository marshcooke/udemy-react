'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 10001));

// this keyword - no longer bound with arrow functions

var user = {
    name: 'Sarah',
    cities: ['Chesapeake', 'Aiken', 'Fond du Lac', 'Stevens Point', 'London', 'Minneapolis'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city + '!';
        });
    }
};
console.log(user.printPlacesLived());

// Challenge area

var multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
