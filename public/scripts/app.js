'use strict';

// function square(x) {
//     return x * x;
// };

// console.log(square(3));

// // const squareArrow = (x) => {
// //     return x * x;
// // }

// const squareArrow = (x) => x * x; 

// console.log(squareArrow(4));

// use arrow functions
// getFirstName
// using this function as reference:
// if (fullName) {
//     firstName = fullName.split(' ')[0];
//     console.log(firstName);
// };

// console.log(firstName);
// getFirstName('Mike Smith') -> "Mike"
// create regular arrow function
// create arrow function using shorthand syntax

var getFirstName1 = function getFirstName1(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName1('Sarah Cooke'));

var getFirstName = function getFirstName(fullerName) {
    return fullerName.split(' ')[0];
};

console.log(getFirstName('Sarah Cooke'));
