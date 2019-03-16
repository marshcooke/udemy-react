'use strict';

console.log('App.js is running!');

// JSX = JavaScript XML
var appObject = {
    title: 'Indecisive Today?',
    subtitle: 'Give this a try!'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appObject.title
    ),
    React.createElement(
        'p',
        null,
        appObject.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Sarah',
    age: 30,
    location: 'Minneapolis'
};
function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'Unknown';
    };
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        getLocation(user.location)
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
