// import './utils.js';
// import { square, add } from './utils.js';

// console.log('app.js is running!');
// console.log(square(4));
// console.log(add(100, 23));


// create new person.js file
// which will export two named exports 
// isAdult(18) - true if adult, otherwise false
// canDrink(18) - true if 21 and over, otherwise false

// import isAdult and canDrink
// use both priniting result to the console 

import './person.js';
import { isAdult, canDrink } from './person.js';

console.log('app.js is running!');
console.log(isAdult(7));
console.log(canDrink(30));
