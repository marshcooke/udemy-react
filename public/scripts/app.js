'use strict';

// Visibility Toggle

// button to display 'hide details' and 'show details' appropriately

console.log('App.js is running!');

var visibility = false;

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Aloha, this means you\'re showing all the details.'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
