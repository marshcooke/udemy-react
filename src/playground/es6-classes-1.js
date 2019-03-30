
// car class
// make, model, name, vim number 
// get description method

// person
// individual attributes

class Person {
    constructor(name = 'Anonymous') {
        this.name = name;
    }
}

const me = new Person('Sarah Cooke');
console.log(me);

const other = new Person();
console.log(other);
