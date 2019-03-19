var nameVar = 'Sarah';
var nameVar = 'A new name';
console.log('nameVar: ', nameVar);

let nameLet = 'Franklin';
nameLet = 'Julie';
console.log('nameLet: ', nameLet);

const nameConst = 'Harriet';
console.log('nameConst: ', nameConst);

// block socping
const fullName = 'Sarah Cooke';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
};

console.log(firstName);
