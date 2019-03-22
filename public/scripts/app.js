'use strict';

console.log('App.js is running!');

// JSX = JavaScript XML
var app = {
    title: 'Indecisive Today?',
    subtitle: 'Give this a try!',
    options: ['One', 'Two', 'Three']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options:' : 'There are no options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var count = 0;
var addOne = function addOne() {
    console.log('addOne');
};
var minusOne = function minusOne() {
    console.log('minusOne');
};
var reset = function reset() {
    console.log('reset');
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'Reset'
    )
);
// challenge
// make button "-1"; set up minusOne function and register (onclick handler); log 'minusOne' everytime clicked
// make reset button "reset"; set up reset function and register (onclick handler); log 'reset' everytime clicked

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
