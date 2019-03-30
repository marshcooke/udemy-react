
// add second optional item to the constructor
// set up constructor to take name and age (Default to 0)
// set up new method 'getDescription' to take into account persons age = "Sarah Cooke is 30 years old."

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'hi I am ' + this.name + '!';
        return `Hi, I am ${this.name}!`; 
        // backtics are necessary to execute this
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

const me = new Person('Sarah Cooke', 30);
// console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
// console.log(other.getGreeting());
console.log(other.getDescription());
