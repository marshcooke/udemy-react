
// add second optional item to the constructor
// set up constructor to take name and age (Default to 0)
// set up new method 'getDescription' to take into account persons age = "Sarah Cooke is 30 years old."

class Person {
    constructor(name = 'Anonymous') {
        this.name = name;
    }
    getGreeting() {
        // return 'hi I am ' + this.name + '!';
        return `Hi, I am ${this.name}!`; 
        // backtics are necessary to execute this
    }
}

const me = new Person('Sarah Cooke');
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());
