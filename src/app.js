console.log('App.js is running!');

// JSX = JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some additional info.</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Sarah',
    age: 30,
    location: 'Minneapolis'
};
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
