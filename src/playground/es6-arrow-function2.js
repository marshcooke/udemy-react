// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55,1, 10001));

// this keyword - no longer bound with arrow functions

const user = {
    name: 'Sarah',
    cities: ['Chesapeake', 'Aiken', 'Fond du Lac', 'Stevens Point', 'London', 'Minneapolis'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
    }
};
console.log(user.printPlacesLived());
